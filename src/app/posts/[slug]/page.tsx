"use client";
import Image from "next/image";
import Container from "@/app/components/container";
import { Article, Author } from "@/app/interfaces/posts";
import { getArticles, getAuthors, getImageUrl, getArticleBySlug } from "@/app/lib/api";
import { useEffect, useState } from "react";
import Header from "@/app/components/header";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    // Define article state
    const [article, setArticle] = useState<Article | null>(null);

    // Fetch article by slug on component mount
    useEffect(() => {
        const fetchArticle = async () => {
            const articleData = await getArticleBySlug(params.slug);
            setArticle(articleData);
        };
        fetchArticle();
    }, [params.slug]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Header />
            <main>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                    {article.title}
                </h1>
                <div className="mb-5">
                    <Image
                        className="w-full h-[748px] object-cover"
                        src={getImageUrl(article.cover.url)}
                        alt={article.title}
                        width={1300}
                        height={630}
                        priority
                    />
                </div>
                <div className="max-w-2xl mx-auto pt-5 pb-10">
                    {article.blocks && article.blocks.length > 0 && (
                        <div 
                            className="prose prose-lg dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ 
                                __html: article.blocks[0].body.replace(/\n/g, '<br>') 
                            }}
                        />
                    )}
                </div>
            </main>
        </Container>
    )
}

