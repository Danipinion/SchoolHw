import { Card } from "@/Components/Card";
import { HwList } from "@/Components/homepage/HwList";
import { Paginator } from "@/Components/homepage/Paginator";
import { Navbar } from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";

const Homepage = (props) => {
    return (
        <>
            <Head title={"HwSchool"} />
            <Navbar user={props.auth.user} />
            <HwList hws={props.hws.data} />
            <Paginator meta={props.hws.meta} />
        </>
    );
};

export default Homepage;
