import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { MOLECULES_DATA } from "../data/molecules";
import { MoleculeData, MoleculeAtom } from "../types";
import {
  Rotate3d,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Info,
  Layers,
  Sparkles,
  Compass,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Grid,
  Filter,
  Check,
  Atom,
  FlaskConical,
} from "lucide-react";

type DisplayStyle = "ball-and-stick" | "space-filling" | "wireframe";
type CategoryFilter = "all" | "inorganic" | "hydrocarbon" | "derivative" | "biochemistry" | "crystal" | "polymer" | "complex";

export const MoleculeViewer3D: React.FC = () => {
  const [selectedMoleculeId, setSelectedMoleculeId] = useState<string>("h2o");
  const [displayStyle, setDisplayStyle] = useState<DisplayStyle>("ball-and-stick");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [selectedAtom, setSelectedAtom] = useState<MoleculeAtom | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedGrade, setSelectedGrade] = useState<number | "all">("all");
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollStripRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const moleculeGroupRef = useRef<THREE.Group | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const zoomLevelRef = useRef(4.5);

  const currentMoleculeIndex = MOLECULES_DATA.findIndex((m) => m.id === selectedMoleculeId);
  const currentMolecule: MoleculeData =
    MOLECULES_DATA[currentMoleculeIndex >= 0 ? currentMoleculeIndex : 0];

  // Filtered molecules for search & categorization
  const filteredMolecules = useMemo(() => {
    return MOLECULES_DATA.filter((mol) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        mol.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mol.vietnameseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mol.geometry.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || mol.category === selectedCategory;

      const matchesGrade =
        selectedGrade === "all" || mol.gradeLevel === selectedGrade;

      return matchesSearch && matchesCategory && matchesGrade;
    });
  }, [searchQuery, selectedCategory, selectedGrade]);

  // Navigate to next / previous molecule
  const handleNextMolecule = () => {
    const nextIdx = (currentMoleculeIndex + 1) % MOLECULES_DATA.length;
    setSelectedMoleculeId(MOLECULES_DATA[nextIdx].id);
    setSelectedAtom(null);
  };

  const handlePrevMolecule = () => {
    const prevIdx =
      (currentMoleculeIndex - 1 + MOLECULES_DATA.length) % MOLECULES_DATA.length;
    setSelectedMoleculeId(MOLECULES_DATA[prevIdx].id);
    setSelectedAtom(null);
  };

  // Scroll horizontal strip
  const scrollStrip = (direction: "left" | "right") => {
    if (scrollStripRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollStripRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Initialize Three.js Scene
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = zoomLevelRef.current;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    container.replaceChildren(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.25);
    dirLight1.position.set(6, 9, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x93c5fd, 0.65);
    dirLight2.position.set(-6, -6, -5);
    scene.add(dirLight2);

    // Molecule root group
    const moleculeGroup = new THREE.Group();
    scene.add(moleculeGroup);
    moleculeGroupRef.current = moleculeGroup;

    // Animation Loop
    const animate = () => {
      if (moleculeGroupRef.current && autoRotate && !isDraggingRef.current) {
        moleculeGroupRef.current.rotation.y += 0.007;
        moleculeGroupRef.current.rotation.x += 0.0025;
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = newW / newH;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      renderer.dispose();
    };
  }, []);

  // Update molecule geometry & atoms whenever currentMolecule or displayStyle changes
  useEffect(() => {
    if (!moleculeGroupRef.current) return;
    const group = moleculeGroupRef.current;

    // Clear previous children
    while (group.children.length > 0) {
      const child = group.children[0] as THREE.Mesh;
      if (child.geometry) child.geometry.dispose();
      if (Array.isArray(child.material)) {
        child.material.forEach((m) => m.dispose());
      } else if (child.material) {
        child.material.dispose();
      }
      group.remove(child);
    }

    const isCPK = displayStyle === "space-filling";
    const isWireframe = displayStyle === "wireframe";

    // Atom Meshes
    currentMolecule.atoms.forEach((atom) => {
      const radiusScale = isCPK
        ? atom.radius * 1.65
        : isWireframe
        ? atom.radius * 0.35
        : atom.radius;
      const sphereGeo = new THREE.SphereGeometry(radiusScale, 32, 32);
      const color = new THREE.Color(atom.color);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.25,
        metalness: 0.15,
        wireframe: isWireframe,
      });

      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      sphereMesh.position.set(atom.x, atom.y, atom.z);
      sphereMesh.userData = atom;
      group.add(sphereMesh);
    });

    // Bond Meshes
    if (!isCPK) {
      currentMolecule.bonds.forEach((bond) => {
        const atom1 = currentMolecule.atoms.find((a) => a.id === bond.from);
        const atom2 = currentMolecule.atoms.find((a) => a.id === bond.to);
        if (!atom1 || !atom2) return;

        const pos1 = new THREE.Vector3(atom1.x, atom1.y, atom1.z);
        const pos2 = new THREE.Vector3(atom2.x, atom2.y, atom2.z);
        const distance = pos1.distanceTo(pos2);
        const bondRadius =
          bond.type === "double"
            ? 0.065
            : bond.type === "triple"
            ? 0.075
            : 0.08;

        const cylinderGeo = new THREE.CylinderGeometry(
          bondRadius,
          bondRadius,
          distance,
          16
        );
        const cylinderMat = new THREE.MeshStandardMaterial({
          color: bond.type === "aromatic" ? 0xa855f7 : 0x94a3b8,
          roughness: 0.35,
          metalness: 0.2,
          wireframe: isWireframe,
        });

        const bondMesh = new THREE.Mesh(cylinderGeo, cylinderMat);
        const midPoint = new THREE.Vector3()
          .addVectors(pos1, pos2)
          .multiplyScalar(0.5);
        bondMesh.position.copy(midPoint);

        const direction = new THREE.Vector3().subVectors(pos2, pos1).normalize();
        const orientation = new THREE.Vector3(0, 1, 0);
        bondMesh.quaternion.setFromUnitVectors(orientation, direction);

        group.add(bondMesh);
      });
    }

    // Reset rotation slightly to show 3D perspective
    group.rotation.set(0.3, 0.4, 0);
  }, [currentMolecule, displayStyle]);

  // Mouse & Touch interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !moleculeGroupRef.current) return;
    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    moleculeGroupRef.current.rotation.y += deltaX * 0.01;
    moleculeGroupRef.current.rotation.x += deltaY * 0.01;

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      previousMousePositionRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !moleculeGroupRef.current || e.touches.length !== 1)
      return;
    const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
    const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

    moleculeGroupRef.current.rotation.y += deltaX * 0.012;
    moleculeGroupRef.current.rotation.x += deltaY * 0.012;

    previousMousePositionRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!cameraRef.current) return;
    e.preventDefault();
    const newZ = cameraRef.current.position.z + e.deltaY * 0.005;
    if (newZ >= 2 && newZ <= 10) {
      cameraRef.current.position.z = newZ;
      zoomLevelRef.current = newZ;
    }
  };

  const handleZoom = (direction: "in" | "out") => {
    if (!cameraRef.current) return;
    const step = direction === "in" ? -0.6 : 0.6;
    const newZ = cameraRef.current.position.z + step;
    if (newZ >= 2 && newZ <= 10) {
      cameraRef.current.position.z = newZ;
      zoomLevelRef.current = newZ;
    }
  };

  const handleResetOrientation = () => {
    if (!moleculeGroupRef.current || !cameraRef.current) return;
    moleculeGroupRef.current.rotation.set(0.3, 0.4, 0);
    cameraRef.current.position.z = 4.5;
    zoomLevelRef.current = 4.5;
  };

  return (
    <div id="molecule-viewer-module" className="flex flex-col gap-5 w-full">
      {/* ========================================================================= */}
      {/* 1. TOP INTERACTIVE SELECTOR & FILTER SUITE (HIỆU CHỈNH DỄ CHỌN)          */}
      {/* ========================================================================= */}
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 sm:p-5 rounded-3xl shadow-xl space-y-4">
        {/* Header Title & Action Toolbar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Rotate3d className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-wide">
                  Khám Phá Phân Tử 3D GDPT 2026
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold">
                  {MOLECULES_DATA.length} MÔ HÌNH
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Khảo sát tương tác không gian, cấu hình lai hóa VSEPR và bản chất liên kết
              </p>
            </div>
          </div>

        {/* Quick Dropdown & Search & View All Button */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Fast Dropdown Picker with Optgroup */}
            <select
              id="select-molecule-quick-jump"
              value={selectedMoleculeId}
              onChange={(e) => {
                setSelectedMoleculeId(e.target.value);
                setSelectedAtom(null);
              }}
              className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-cyan-300 font-semibold focus:outline-none focus:border-cyan-400 max-w-[200px] truncate"
              title="Chọn nhanh phân tử"
            >
              <optgroup label="─── LỚP 10 (15 phân tử) ───" className="bg-slate-900 text-slate-300 font-bold">
                {MOLECULES_DATA.filter((m) => m.gradeLevel === 10).map((m) => (
                  <option key={m.id} value={m.id} className="bg-slate-950 text-white font-normal">
                    {m.formula} - {m.vietnameseName}
                  </option>
                ))}
              </optgroup>
              <optgroup label="─── LỚP 11 (15 phân tử) ───" className="bg-slate-900 text-slate-300 font-bold">
                {MOLECULES_DATA.filter((m) => m.gradeLevel === 11).map((m) => (
                  <option key={m.id} value={m.id} className="bg-slate-950 text-white font-normal">
                    {m.formula} - {m.vietnameseName}
                  </option>
                ))}
              </optgroup>
              <optgroup label="─── LỚP 12 (15 phân tử) ───" className="bg-slate-900 text-slate-300 font-bold">
                {MOLECULES_DATA.filter((m) => m.gradeLevel === 12).map((m) => (
                  <option key={m.id} value={m.id} className="bg-slate-950 text-white font-normal">
                    {m.formula} - {m.vietnameseName}
                  </option>
                ))}
              </optgroup>
            </select>

            {/* Live Search Input */}
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="input-search-molecules"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm công thức, tên..."
                className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Open Gallery Drawer Button */}
            <button
              id="btn-open-molecule-gallery"
              onClick={() => setIsGalleryModalOpen(true)}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0"
              title="Xem thư viện tất cả 45 phân tử dạng lưới"
            >
              <Grid className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Thư Viện ({MOLECULES_DATA.length})</span>
            </button>
          </div>
        </div>

        {/* Category & Grade Filter Chips */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-800/80 text-xs">
          {/* Grade Filter Chips with Exact 15 count */}
          <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-[11px] font-mono px-1.5">Khối:</span>
            {[
              { id: "all", label: "Tất cả (45)" },
              { id: 10, label: "Lớp 10 (15)" },
              { id: 11, label: "Lớp 11 (15)" },
              { id: 12, label: "Lớp 12 (15)" },
            ].map((g) => (
              <button
                key={String(g.id)}
                id={`filter-grade-${g.id}`}
                onClick={() => setSelectedGrade(g.id as any)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedGrade === g.id
                    ? "bg-cyan-400 text-black shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-slate-400 text-[11px] font-mono mr-1 hidden lg:inline">
              Nhóm:
            </span>
            {(
              [
                { id: "all", label: "Tất cả nhóm" },
                { id: "inorganic", label: "🧪 Vô cơ" },
                { id: "hydrocarbon", label: "⛽ Hiđrocacbon" },
                { id: "derivative", label: "🌿 Dẫn xuất" },
                { id: "biochemistry", label: "🧬 Hóa sinh" },
                { id: "polymer", label: "🧵 Polime" },
                { id: "complex", label: "🔷 Phức chất" },
                { id: "crystal", label: "💎 Tinh thể" },
              ] as { id: CategoryFilter; label: string }[]
            ).map((cat) => (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                    : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Molecule Carousel Cards Strip (Horizontal Easy Picker) */}
        <div className="relative group">
          {/* Scroll Left Button */}
          <button
            onClick={() => scrollStrip("left")}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center shadow-lg transition-all"
            aria-label="Cuộn sang trái"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrollable Molecule Cards Container */}
          <div
            ref={scrollStripRef}
            className="flex items-center gap-2.5 overflow-x-auto scroll-smooth py-1 px-1 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {filteredMolecules.length === 0 ? (
              <div className="py-4 px-6 text-slate-400 text-xs italic">
                Không tìm thấy phân tử nào phù hợp với bộ lọc hiện tại.
              </div>
            ) : (
              filteredMolecules.map((mol) => {
                const isSelected = selectedMoleculeId === mol.id;
                return (
                  <button
                    key={mol.id}
                    id={`btn-card-mol-${mol.id}`}
                    onClick={() => {
                      setSelectedMoleculeId(mol.id);
                      setSelectedAtom(null);
                    }}
                    className={`p-2.5 rounded-2xl text-left shrink-0 transition-all border w-44 sm:w-48 group ${
                      isSelected
                        ? "bg-gradient-to-br from-cyan-950/70 to-slate-900 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/50 scale-[1.02]"
                        : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span
                        className={`text-sm font-bold font-mono ${
                          isSelected ? "text-cyan-300" : "text-white"
                        }`}
                      >
                        {mol.formula}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800/90 text-slate-400 font-mono">
                        Lớp {mol.gradeLevel || 10}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-200 truncate">
                      {mol.vietnameseName}
                    </div>

                    <div className="flex items-center justify-between mt-1 text-[10px] text-slate-400">
                      <span className="truncate max-w-[95px] text-cyan-400/90">
                        {mol.geometry.split(" ")[0]}
                      </span>
                      <span className="font-mono text-emerald-400">{mol.bondAngle}</span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scrollStrip("right")}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center shadow-lg transition-all"
            aria-label="Cuộn sang phải"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN 3D CANVAS VIEWPORT & STRUCTURAL DETAILS PANEL                     */}
      {/* ========================================================================= */}
      <div id="molecule-viewer-container" className="flex flex-col lg:flex-row gap-6 w-full">
        {/* 3D Canvas Area - Immersive Viewport */}
        <div className="flex-1 flex flex-col bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] relative min-h-[520px]">
          {/* Active View HUD Badge with Prev/Next Quick Switcher */}
          <div className="absolute top-4 left-4 z-20 bg-[#020617]/85 backdrop-blur-md border border-slate-700/60 p-3 rounded-2xl shadow-2xl pointer-events-auto">
            <div className="flex items-center justify-between gap-3 mb-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                <h3 className="text-base font-bold text-cyan-400 tracking-wide font-mono">
                  {currentMolecule.formula}
                </h3>
              </div>
              {/* Prev / Next Mini Controls */}
              <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
                <button
                  id="hud-btn-prev-molecule"
                  onClick={handlePrevMolecule}
                  className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Xem phân tử trước đó"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  id="hud-btn-next-molecule"
                  onClick={handleNextMolecule}
                  className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Xem phân tử tiếp theo"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-xs font-semibold text-white">
              {currentMolecule.vietnameseName}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {currentMolecule.geometry} • {currentMolecule.bondAngle}
            </p>
          </div>

          {/* Controls Overlay Bar (Top Right) */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 p-1.5 bg-[#020617]/85 backdrop-blur-md rounded-2xl border border-slate-800/80 pointer-events-auto">
            <button
              id="btn-toggle-autorotate"
              onClick={() => setAutoRotate(!autoRotate)}
              title={autoRotate ? "Tạm dừng tự xoay" : "Tự động xoay 360°"}
              className={`p-2 rounded-xl transition-all ${
                autoRotate
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Rotate3d className="w-4 h-4" />
            </button>
            <button
              id="btn-zoom-in"
              onClick={() => handleZoom("in")}
              title="Phóng to"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              id="btn-zoom-out"
              onClick={() => handleZoom("out")}
              title="Thu nhỏ"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              id="btn-reset-view"
              onClick={handleResetOrientation}
              title="Đặt lại góc nhìn ban đầu"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Compass className="w-4 h-4" />
            </button>
          </div>

          {/* 3D Canvas Mount Point */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
            className="w-full flex-1 cursor-grab active:cursor-grabbing select-none"
          />

          {/* Bottom Display Style Switcher & Action Controls */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
            <div className="flex items-center gap-1.5 p-1.5 bg-[#020617]/90 backdrop-blur-md rounded-2xl border border-slate-800/80 pointer-events-auto text-xs">
              <span className="text-slate-400 px-2 font-medium flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Kiểu hiển thị:
              </span>
              <button
                id="btn-style-ball-stick"
                onClick={() => setDisplayStyle("ball-and-stick")}
                className={`px-3 py-1.5 rounded-xl transition-all font-medium ${
                  displayStyle === "ball-and-stick"
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Quả cầu & Que
              </button>
              <button
                id="btn-style-cpk"
                onClick={() => setDisplayStyle("space-filling")}
                className={`px-3 py-1.5 rounded-xl transition-all font-medium ${
                  displayStyle === "space-filling"
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Mô hình CPK
              </button>
              <button
                id="btn-style-wireframe"
                onClick={() => setDisplayStyle("wireframe")}
                className={`px-3 py-1.5 rounded-xl transition-all font-medium ${
                  displayStyle === "wireframe"
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Khung dây
              </button>
            </div>

            <div className="text-[11px] text-slate-400 bg-[#020617]/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-800 hidden md:block">
              Kéo chuột / vuốt tay để xoay 360° • Cuộn chuột để thu phóng
            </div>
          </div>
        </div>

        {/* Structural Chemistry Details Panel */}
        <div className="w-full lg:w-96 flex flex-col gap-4 bg-slate-900/60 border border-slate-800 p-5 rounded-3xl shadow-xl">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-white font-mono">
                  {currentMolecule.formula}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium">
                  {currentMolecule.polarity}
                </span>
              </div>
              <p className="text-slate-300 text-sm font-semibold mt-0.5">
                {currentMolecule.vietnameseName} ({currentMolecule.name})
              </p>
              {currentMolecule.vseprType && (
                <div className="mt-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    Dạng VSEPR: {currentMolecule.vseprType}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Geometry & Bond Specs Bento Grid */}
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="bg-slate-800/60 border border-slate-700/50 p-3 rounded-xl">
              <span className="text-slate-400 block mb-1">Hình học phân tử</span>
              <span className="font-semibold text-slate-200">
                {currentMolecule.geometry}
              </span>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/50 p-3 rounded-xl">
              <span className="text-slate-400 block mb-1">Góc liên kết</span>
              <span className="font-semibold text-emerald-400 font-mono text-sm">
                {currentMolecule.bondAngle}
              </span>
            </div>
            {currentMolecule.hybridization && (
              <div className="bg-slate-800/60 border border-slate-700/50 p-3 rounded-xl">
                <span className="text-slate-400 block mb-1">Trạng thái lai hóa</span>
                <span className="font-semibold text-amber-400 font-mono">
                  {currentMolecule.hybridization}
                </span>
              </div>
            )}
            <div className="bg-slate-800/60 border border-slate-700/50 p-3 rounded-xl">
              <span className="text-slate-400 block mb-1">Số hạt vi mô</span>
              <span className="font-semibold text-slate-200">
                {currentMolecule.atoms.length} nguyên tử • {currentMolecule.bonds.length} liên kết
              </span>
            </div>
          </div>

          {/* Scientific Explanation */}
          <div className="bg-slate-800/40 border border-slate-700/40 p-3.5 rounded-xl text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-semibold text-cyan-400">
              <Info className="w-3.5 h-3.5" />
              <span>Bản chất liên kết & góc hình học:</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {currentMolecule.description}
            </p>
          </div>

          {/* Real-World Hook Context */}
          <div className="bg-amber-950/20 border border-amber-800/30 p-3.5 rounded-xl text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ứng dụng thực tế đời sống:</span>
            </div>
            <p className="text-amber-200/90 leading-relaxed">
              {currentMolecule.realWorldContext}
            </p>
          </div>

          {/* Atom Color Legend (CPK Standard with All Current Elements) */}
          <div className="pt-2 border-t border-slate-800">
            <span className="text-[11px] font-medium text-slate-400 block mb-2">
              Quy ước màu nguyên tử (CPK Color Standard):
            </span>
            <div className="flex flex-wrap gap-1.5 text-[10px]">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" /> C
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-white inline-block border border-slate-600" /> H
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> O
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" /> N
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> F / Cl
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" /> S (Lưu huỳnh)
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" /> P / B
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" /> Na
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" /> Cu (Đồng)
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 inline-block" /> Be (Beri)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FULL MOLECULE GALLERY MODAL ("THƯ VIỆN PHÂN TỬ 3D")                     */}
      {/* ========================================================================= */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#020617] border border-slate-700/80 rounded-3xl w-full max-w-5xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Grid className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Thư Viện Phân Tử 3D GDPT 2026 ({MOLECULES_DATA.length} mô hình)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Mỗi khối 15 phân tử trọng tâm: Lớp 10 (15) • Lớp 11 (15) • Lớp 12 (15)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Modal Grade Selector */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  {[
                    { id: "all", label: "Tất cả" },
                    { id: 10, label: "Lớp 10 (15)" },
                    { id: 11, label: "Lớp 11 (15)" },
                    { id: 12, label: "Lớp 12 (15)" },
                  ].map((g) => (
                    <button
                      key={String(g.id)}
                      id={`modal-filter-grade-${g.id}`}
                      onClick={() => setSelectedGrade(g.id as any)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        selectedGrade === g.id
                          ? "bg-cyan-400 text-black shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
                <button
                  id="btn-close-molecule-gallery"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content - Grid of Molecule Cards */}
            <div className="p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {(selectedGrade === "all" ? MOLECULES_DATA : MOLECULES_DATA.filter((m) => m.gradeLevel === selectedGrade)).map((mol) => {
                const isSelected = selectedMoleculeId === mol.id;
                return (
                  <button
                    key={mol.id}
                    id={`gallery-item-${mol.id}`}
                    onClick={() => {
                      setSelectedMoleculeId(mol.id);
                      setSelectedAtom(null);
                      setIsGalleryModalOpen(false);
                    }}
                    className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between gap-3 group ${
                      isSelected
                        ? "bg-cyan-950/40 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400"
                        : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-base font-bold font-mono text-cyan-400">
                          {mol.formula}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          Lớp {mol.gradeLevel || 10}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {mol.vietnameseName}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {mol.name}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 truncate max-w-[130px]">
                        {mol.geometry}
                      </span>
                      <span className="font-mono text-emerald-400 font-semibold">
                        {mol.bondAngle}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Đang hiển thị trên không gian 3D</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
              <span>Chuẩn cấu trúc VSEPR và obitan liên kết hóa học Bộ GD&ĐT 2026</span>
              <button
                onClick={() => setIsGalleryModalOpen(false)}
                className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
