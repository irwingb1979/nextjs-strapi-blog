import Link from "next/link";
import Container from "@/app/components/container";

export default function NotFound() {
    return (
        <Container>
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Post Not Found</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    The blog post you're looking for doesn't exist or has been removed.
                </p>
                <Link 
                    href="/" 
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </Container>
    );
}
