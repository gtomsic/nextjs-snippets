import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditProps {
    params: {
        id: string;
    };
}

export default async function SnippetEditPage(props: SnippetEditProps) {
    const { id } = await props.params;
    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(id) },
    });
    console.log(id);
    if (!snippet) {
        return notFound();
    }

    return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    );
}
