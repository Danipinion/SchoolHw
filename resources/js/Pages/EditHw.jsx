import { Card } from "@/Components/Card";
import { HwList } from "@/Components/homepage/HwList";
import { Paginator } from "@/Components/homepage/Paginator";
import { Navbar } from "@/Components/Navbar";
import { Link, Head, router } from "@inertiajs/react";
import { useState } from "react";

const Homepage = (props) => {
    // console.log(ehws);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mapel, setMapel] = useState("");
    const handleSubmit = () => {
        const data = {
            id: props.ehws.id,
            title,
            description,
            mapel,
        };
        router.post("/homeworks/update", data);
        setTitle("");
        setDescription("");
        setMapel("");
    };
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={"HwSchool"} />
            <Navbar user={props.auth.user} />
            <div className="p-6 text-gray-900 flex flex-col gap-4">
                {/* {isNotif && (
                    <div className="alert alert-success shadow-lg">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{isNotif && props.flash.message}</span>
                        </div>
                    </div>
                )} */}

                <input
                    type="text"
                    placeholder="Title"
                    className="input w-full  input-primary focus:border-none focus:outline-none"
                    onChange={(title) => setTitle(title.target.value)}
                    defaultValue={props.ehws.title}
                />
                <input
                    type="text"
                    placeholder="Description"
                    className="input w-full  input-primary focus:border-none focus:outline-none"
                    onChange={(description) =>
                        setDescription(description.target.value)
                    }
                    defaultValue={props.ehws.description}
                />
                <input
                    type="text"
                    placeholder="Mapel"
                    className="input w-full  input-primary focus:border-none focus:outline-none"
                    onChange={(mapel) => setMapel(mapel.target.value)}
                    defaultValue={props.ehws.mapel}
                />
                <button
                    className="btn btn-primary"
                    onClick={() => handleSubmit()}
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default Homepage;
