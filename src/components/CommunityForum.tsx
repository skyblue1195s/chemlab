import React, { useState, useMemo } from "react";
import { ForumPost } from "../types";
import { INITIAL_FORUM_POSTS } from "../data/forumData";
import {
  MessageSquare,
  ThumbsUp,
  CheckCircle2,
  Plus,
  Send,
  Sparkles,
  HelpCircle,
  Tag,
  Search,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
  Filter,
} from "lucide-react";

export const CommunityForum: React.FC<{
  onRewardXP?: (xp: number, label: string) => void;
}> = ({ onRewardXP }) => {
  const [posts, setPosts] = useState<ForumPost[]>(() => {
    try {
      const saved = localStorage.getItem("chem_community_forum_posts");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_FORUM_POSTS.length) {
          return parsed;
        }
      }
      return INITIAL_FORUM_POSTS;
    } catch {
      return INITIAL_FORUM_POSTS;
    }
  });

  const [selectedGrade, setSelectedGrade] = useState<number | "all">("all");
  const [activeTag, setActiveTag] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"newest" | "upvotes" | "answers">("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const POSTS_PER_PAGE = 8;

  const [isCreatingPost, setIsCreatingPost] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");
  const [newGrade, setNewGrade] = useState<number>(10);
  const [newSchool, setNewSchool] = useState<string>("");
  const [replyText, setReplyText] = useState<Record<string, string>>({});

  const savePosts = (updated: ForumPost[]) => {
    setPosts(updated);
    try {
      localStorage.setItem("chem_community_forum_posts", JSON.stringify(updated));
    } catch {}
  };

  const handleUpvotePost = (postId: string) => {
    const updated = posts.map((p) =>
      p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p
    );
    savePosts(updated);
  };

  const handleUpvoteAnswer = (postId: string, ansId: string) => {
    const updated = posts.map((p) => {
      if (p.id !== postId) return p;
      return {
        ...p,
        answers: p.answers.map((a) =>
          a.id === ansId ? { ...a, upvotes: a.upvotes + 1 } : a
        ),
      };
    });
    savePosts(updated);
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      authorName: "Bạn (Thành viên)",
      authorAvatar: "🎓",
      school: newSchool.trim() || "Thành viên Cộng đồng",
      grade: newGrade as any,
      title: newTitle.trim(),
      content: newContent.trim(),
      tags: [`Lớp ${newGrade}`, "Hỏi đáp", "Thảo luận"],
      upvotes: 1,
      createdAt: "Vừa xong",
      answers: [],
    };

    const updated = [newPost, ...posts];
    savePosts(updated);
    setNewTitle("");
    setNewContent("");
    setNewSchool("");
    setIsCreatingPost(false);

    if (onRewardXP) {
      onRewardXP(20, "Đăng câu hỏi học tập lên diễn đàn");
    }
  };

  const handleAddReply = (postId: string) => {
    const text = replyText[postId]?.trim();
    if (!text) return;

    const updated = posts.map((p) => {
      if (p.id !== postId) return p;
      return {
        ...p,
        answers: [
          ...p.answers,
          {
            id: `ans-${Date.now()}`,
            authorName: "Bạn (Thành viên)",
            content: text,
            upvotes: 0,
            createdAt: "Vừa xong",
            isAccepted: false,
          },
        ],
      };
    });

    savePosts(updated);
    setReplyText((prev) => ({ ...prev, [postId]: "" }));
    if (onRewardXP) {
      onRewardXP(15, "Trả lời câu hỏi thảo luận");
    }
  };

  // Popular tags list
  const popularTags = useMemo(() => {
    const tagCount: Record<string, number> = {};
    posts.forEach((p) => {
      p.tags.forEach((t) => {
        tagCount[t] = (tagCount[t] || 0) + 1;
      });
    });
    return Object.entries(tagCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag);
  }, [posts]);

  // Filtered and sorted posts
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      // Grade filter
      if (selectedGrade !== "all" && p.grade !== selectedGrade) return false;

      // Tag filter
      if (activeTag !== "all" && !p.tags.includes(activeTag)) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchContent = p.content.toLowerCase().includes(q);
        const matchAuthor = p.authorName.toLowerCase().includes(q);
        const matchSchool = (p.school || "").toLowerCase().includes(q);
        const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
        const matchAnswer = p.answers.some((a) =>
          a.content.toLowerCase().includes(q)
        );
        if (!matchTitle && !matchContent && !matchAuthor && !matchSchool && !matchTag && !matchAnswer) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "upvotes") return b.upvotes - a.upvotes;
      if (sortBy === "answers") return b.answers.length - a.answers.length;
      return 0; // Default order
    });
  }, [posts, selectedGrade, activeTag, searchQuery, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const displayedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSelectGrade = (grade: number | "all") => {
    setSelectedGrade(grade);
    setCurrentPage(1);
  };

  const handleSelectTag = (tag: string) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  return (
    <div id="community-forum-module" className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-900/50 border border-slate-800 p-5 rounded-3xl shadow-xl">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              Diễn Đàn Học Tập & Thảo Luận Hóa Học GDPT 2026
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-mono font-medium shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              {posts.length} Chủ đề câu hỏi
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Nơi học sinh và giáo viên chia sẻ mẹo học tập, lời giải chi tiết, phản xạ phòng thi và giải mã hiện tượng thí nghiệm
          </p>
        </div>

        <button
          id="btn-open-create-post"
          onClick={() => setIsCreatingPost(!isCreatingPost)}
          className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] shrink-0"
        >
          <Plus className="w-4 h-4" /> Đặt câu hỏi mới (+20 XP)
        </button>
      </div>

      {/* New Question Form */}
      {isCreatingPost && (
        <form
          onSubmit={handleCreatePost}
          className="bg-slate-900/80 border border-cyan-500/40 p-5 rounded-3xl shadow-2xl flex flex-col gap-4 animate-fadeIn"
        >
          <h4 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Đặt câu hỏi thắc mắc cho cộng đồng học sinh & giáo viên
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Tiêu đề câu hỏi ngắn gọn (VD: Cách thăng bằng e, Mẹo nhớ Markovnikov...)"
              className="sm:col-span-2 bg-[#020617]/90 border border-slate-700 text-slate-100 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              required
            />
            <select
              value={newGrade}
              onChange={(e) => setNewGrade(Number(e.target.value))}
              className="bg-[#020617]/90 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-400"
            >
              <option value={10}>Chương trình Lớp 10</option>
              <option value={11}>Chương trình Lớp 11</option>
              <option value={12}>Chương trình Lớp 12</option>
            </select>
          </div>

          <input
            type="text"
            value={newSchool}
            onChange={(e) => setNewSchool(e.target.value)}
            placeholder="Tên trường THPT của bạn (VD: THPT Chuyên Hà Nội - Amsterdam...)"
            className="bg-[#020617]/90 border border-slate-700 text-slate-100 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            rows={3}
            placeholder="Nội dung chi tiết, câu hỏi cụ thể, phương trình hoặc hiện tượng cần giải đáp..."
            className="bg-[#020617]/90 border border-slate-700 text-slate-100 text-xs rounded-xl p-3 focus:outline-none focus:border-cyan-400"
            required
          />

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsCreatingPost(false)}
              className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            >
              Đăng câu hỏi (+20 XP)
            </button>
          </div>
        </form>
      )}

      {/* Filter and Search Controls */}
      <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-3xl flex flex-col gap-4 shadow-lg">
        {/* Row 1: Search and Sort */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Tìm kiếm chủ đề, phương trình, tác giả, trường THPT hoặc từ khóa hóa học..."
              className="w-full bg-[#020617]/90 border border-slate-700/80 text-slate-100 text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full sm:w-auto bg-[#020617]/90 border border-slate-700/80 text-slate-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-400"
            >
              <option value="newest">Sắp xếp: Mới nhất</option>
              <option value="upvotes">Sắp xếp: Nhiều bình chọn nhất</option>
              <option value="answers">Sắp xếp: Nhiều câu trả lời nhất</option>
            </select>
          </div>
        </div>

        {/* Row 2: Grade Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <span className="text-xs text-slate-400 font-medium shrink-0 flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Khối lớp:
          </span>

          <button
            onClick={() => handleSelectGrade("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              selectedGrade === "all"
                ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                : "bg-[#020617] text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Tất cả ({posts.length})
          </button>

          {[10, 11, 12].map((g) => {
            const count = posts.filter((p) => p.grade === g).length;
            return (
              <button
                key={g}
                onClick={() => handleSelectGrade(g)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  selectedGrade === g
                    ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                    : "bg-[#020617] text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                Hóa học Lớp {g} ({count})
              </button>
            );
          })}
        </div>

        {/* Row 3: Popular tags pills */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-slate-800/80">
          <span className="text-[11px] text-slate-400 font-medium shrink-0 flex items-center gap-1">
            <Tag className="w-3 h-3 text-amber-400" /> Chủ đề nổi bật:
          </span>

          {activeTag !== "all" && (
            <button
              onClick={() => handleSelectTag("all")}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-950/80 text-rose-300 border border-rose-700 hover:bg-rose-900 transition-colors"
            >
              ✕ Bỏ lọc tag #{activeTag}
            </button>
          )}

          {popularTags.map((tag) => {
            const isSelected = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => handleSelectTag(isSelected ? "all" : tag)}
                className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border transition-all ${
                  isSelected
                    ? "bg-amber-500 text-black font-bold border-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                    : "bg-[#020617] text-slate-300 hover:text-cyan-300 border-slate-800 hover:border-slate-700"
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Counter & Pagination Top */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Hiển thị <strong>{displayedPosts.length}</strong> / <strong>{filteredPosts.length}</strong> câu hỏi thảo luận
          {selectedGrade !== "all" ? ` (Khối ${selectedGrade})` : ""}
          {activeTag !== "all" ? ` [#{activeTag}]` : ""}
        </span>

        {totalPages > 1 && (
          <span className="font-mono text-cyan-400">
            Trang {currentPage} / {totalPages}
          </span>
        )}
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {displayedPosts.length === 0 ? (
          <div className="p-10 rounded-3xl bg-slate-900/30 border border-slate-800 text-center flex flex-col items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-slate-500" />
            <p className="text-sm text-slate-300 font-medium">Không tìm thấy câu hỏi thảo luận nào phù hợp.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedGrade("all");
                setActiveTag("all");
              }}
              className="text-xs text-cyan-400 hover:underline"
            >
              Xóa bộ lọc để xem tất cả {posts.length} câu hỏi
            </button>
          </div>
        ) : (
          displayedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-900/40 border border-slate-800 p-5 rounded-3xl flex flex-col gap-4 shadow-lg hover:border-slate-700/80 transition-all"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-[#020617] border border-slate-800 flex items-center justify-center text-lg shrink-0">
                    {post.authorAvatar || "🧑‍🔬"}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap text-[11px] text-slate-400 font-mono mt-0.5">
                      <span className="text-slate-300 font-semibold">{post.authorName}</span>
                      {post.school && (
                        <>
                          <span>•</span>
                          <span className="text-cyan-300">{post.school}</span>
                        </>
                      )}
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px]">
                        Lớp {post.grade}
                      </span>
                      <span>•</span>
                      <span>{post.createdAt}</span>
                    </div>
                  </div>
                </div>

                <button
                  id={`btn-upvote-post-${post.id}`}
                  onClick={() => handleUpvotePost(post.id)}
                  className="px-3.5 py-1.5 rounded-full bg-[#020617] hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors font-mono shrink-0"
                  title="Bình chọn câu hỏi hay"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{post.upvotes}</span>
                </button>
              </div>

              {/* Post Content */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1 whitespace-pre-line">
                {post.content}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pl-1">
                {post.tags.map((tag, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => handleSelectTag(tag)}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#020617] text-cyan-400 border border-slate-800 hover:border-cyan-500/50 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              {/* Answers Section */}
              <div className="pt-3 border-t border-slate-800/80 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block font-mono flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  {post.answers.length} Câu trả lời & Lời giải chi tiết:
                </span>

                {post.answers.map((ans) => (
                  <div
                    key={ans.id}
                    className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-2 ${
                      ans.isAccepted
                        ? "bg-emerald-950/30 border-emerald-800/50 text-slate-100 shadow-md"
                        : "bg-[#020617]/80 border-slate-800 text-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-white text-xs">{ans.authorName}</span>
                        {ans.isVerifiedTeacher && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-700 font-medium">
                            ✓ Giáo viên xác nhận
                          </span>
                        )}
                        {ans.isAccepted && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 font-medium flex items-center gap-1 shadow-[0_0_8px_rgba(16,185,129,0.25)]">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Lời giải hay nhất
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => handleUpvoteAnswer(post.id, ans.id)}
                        className="text-[11px] text-slate-400 hover:text-cyan-400 flex items-center gap-1 font-mono transition-colors"
                        title="Bình chọn câu trả lời hữu ích"
                      >
                        <ThumbsUp className="w-3 h-3" /> {ans.upvotes}
                      </button>
                    </div>
                    <p className="whitespace-pre-line text-xs sm:text-sm text-slate-200">{ans.content}</p>
                  </div>
                ))}

                {/* Add Answer Input */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    value={replyText[post.id] || ""}
                    onChange={(e) =>
                      setReplyText({ ...replyText, [post.id]: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddReply(post.id);
                    }}
                    placeholder="Viết câu trả lời, chia sẻ phương pháp giải hoặc thảo luận..."
                    className="flex-1 bg-[#020617]/90 border border-slate-700 text-slate-200 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                  />
                  <button
                    id={`btn-reply-${post.id}`}
                    onClick={() => handleAddReply(post.id)}
                    className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black transition-colors shadow-[0_0_12px_rgba(34,211,238,0.35)] flex items-center justify-center"
                    title="Gửi câu trả lời (+15 XP)"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls Bottom */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 py-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Trang trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              // Show pages around current
              if (
                pageNum === 1 ||
                pageNum === totalPages ||
                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all ${
                      currentPage === pageNum
                        ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              }
              if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                return (
                  <span key={pageNum} className="text-slate-600 px-1 font-mono">
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Trang tiếp theo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
