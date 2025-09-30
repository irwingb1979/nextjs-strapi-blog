"use client";
import Image from "next/image";
import { Article, Author } from "../interfaces/posts";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getArticles, getAuthors, getImageUrl } from "@/app/lib/api";

export function MoreStories() {

    // Define articles state
    const [articles, setArticles] = useState<Article[]>([]);

    // Define authors state
    const [authors, setAuthors] = useState<Author[]>([]);

    // Fetch articles on component mount
    useEffect(() => {
        const fetchData = async () => {
            const articlesData = await getArticles();
            const authorsData = await getAuthors();
            setArticles(articlesData);
            setAuthors(authorsData);
        };
        fetchData();
    }, []);

    // Format date date, "LLLL d, yyyy"
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    return (
        <section>
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                More Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-22 mb-32">
                {articles.map((article) => (
                    <article key={article.id}>
                        <div className="mb-5">
                            <Link href={`/posts/${article.slug}`} aria-label={article.title}>
                                {article.cover?.url ? (
                                    <Image
                                        className="w-full h-80 object-cover"
                                        src={getImageUrl(article.cover.url)}
                                        alt={article.title}
                                        width={1300}
                                        height={630}
                                        priority
                                    />
                                ) : null}
                            </Link>
                        </div>

                        <h3 className="text-3xl mb-3 leading-snug">
                            <Link href={`/posts/${article.slug}`} className="hover:underline">
                                {article.title}
                            </Link>
                        </h3>
                        <div className="text-lg mb-4">
                            {/* this format date, "LLLL d, yyyy"*/}
                            {formatDate(new Date(article.publishedAt))}
                        </div>
                        <p className="text-lg leading-relaxed mb-4">{article.description}</p>
                        <div className="flex items-center">
                            {/* if author.id correspond with author.articles print author.avatar */}
                            {authors.map((author) => {
                                if (author.id === article.author.id) {
                                    return (
                                        <Image
                                            key={author.id}
                                            src={getImageUrl(author.avatar.url)}
                                            className="w-12 h-12 rounded-full mr-4 grayscale"
                                            alt={author.name}
                                            width={48}
                                            height={48}
                                        />
                                    );
                                }
                            })}
                            <div className="text-xl font-bold">{article.author.name}</div>
                        </div>
                    </article>
                ))}
            </div>
        </section>)
}