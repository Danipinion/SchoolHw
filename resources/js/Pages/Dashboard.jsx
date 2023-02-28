import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
    // console.log(props.hwsd.length);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mapel, setMapel] = useState("");
    const [isNotif, setIsNotif] = useState(false);
    const handleSubmit = () => {
        const data = {
            title,
            description,
            mapel,
        };
        router.post("/homeworks", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setMapel("");
    };
    useEffect(() => {
        if (!props.hwsd) {
            router.get("/homeworks");
        }
        return;
    }, []);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight text-center">
                    📖 PR KITA 📖
                </h2>
            }
        >
            <Head title="HwSchool" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex flex-col gap-4">
                            <h3 className="text-center text-xl">
                                Selamat Datang {props.auth.user.name}
                            </h3>
                            {isNotif && (
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
                                        <span>
                                            {isNotif && props.flash.message}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <input
                                type="text"
                                placeholder="Title"
                                className="input w-full  input-primary focus:border-none focus:outline-none"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                value={title}
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                className="input w-full  input-primary focus:border-none focus:outline-none"
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                value={description}
                            />
                            <input
                                type="text"
                                placeholder="Mapel"
                                className="input w-full  input-primary focus:border-none focus:outline-none"
                                onChange={(mapel) =>
                                    setMapel(mapel.target.value)
                                }
                                value={mapel}
                            />
                            <button
                                className="btn btn-primary"
                                onClick={() => handleSubmit()}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-5">
                    {props.hwsd && props.hwsd.length > 0 ? (
                        props.hwsd.map((hw, i) => {
                            return (
                                <div
                                    key={i}
                                    className="card w-full bg-primary text-white"
                                >
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">
                                            {hw.title}
                                        </h2>
                                        <p>{hw.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link
                                                href={route("edit.hw")}
                                                as="button"
                                                method="get"
                                                data={{ id: hw.id }}
                                                className="btn btn-warning"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                href={route("del.hw")}
                                                as="button"
                                                method="delete"
                                                data={{ id: hw.id }}
                                                className="btn btn-error"
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h1> Anda belum Kirim Pr🥲</h1>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
