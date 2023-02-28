import { Link } from "@inertiajs/react";
import React from "react";

export const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div className="btn-group flex justify-center mt-5">
            {prev && (
                <Link href={prev} className="btn btn-primary">
                    «
                </Link>
            )}
            <button className="btn btn-primary">{current}</button>
            {next && (
                <Link href={next} className="btn btn-primary">
                    »
                </Link>
            )}
        </div>
    );
};
