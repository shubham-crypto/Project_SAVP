import { Button, Text, Heading } from "../../components";
import RiversideParkDevelopment from "../../components/RiversideParkDevelopment";
import React,{Suspense} from "react";

const data = [
    {
        userImage: "images/Cimages/Home-UpcomingEvents1.png",
        title: "Webinars For Urban Development",
        description:
            "Upcoming Webinars on Sustainable Urban Development, Innovative Solutions, Modern Challenges, Green Infrastructure, and Future-Ready Communities for a Better Tomorrow.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/Cimages/Home-UpcomingEvents4.jpg",
        title: "Discusion For Progress Reports",
        description:
            "An In-Depth Analysis of Achievements, Challenges, Milestones, Data Insights, Performance Metrics, Future Goals, Strategic Planning, and Continuous Improvement for Success.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/Cimages/Home-UpcomingEvents3.jpg",
        title: "Oganizing Urban Development Worshops",
        description:
            "Hands-On Training, Expert Insights, Innovative Solutions, Community Engagement, Green Infrastructure, Smart City Planning, Collaborative Design, Future-Ready Strategies, and Sustainable Urban Growth.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/Cimages/Home-UpcomingEvents2.jpeg",
        title: "Regular Meetings For Discussing Issues",
        description:
            "Collaborative Problem-Solving, Strategic Planning, Stakeholder Engagement, Innovative Solutions, Real-Time Feedback, Progress Tracking, Community Input, Data-Driven Decisions, and Continuous Improvement Initiatives.",
        seeMoreButton: "See More",
    },
];

export default function HomepagecolouredColumnFour() {
    return (
        <div className="mt-40 flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-20 md:gap-[60px] md:p-5 sm:gap-10">
                <div className="mx-[264px] flex flex-col items-center gap-6 self-stretch md:mx-0">
                    <Heading
                        size="heading2xl"
                        as="h4"
                        className="!text-[48px] !font-bold capitalize !text-blue_gray-900_01 md:!text-[44px] sm:!text-[38px]"
                    >
                        Upcoming Events
                    </Heading>
                    <Text as="p" className="w-full leading-[26px] !text-gray-600_01">
                        Explore how upcoming projects will incorporate public feedback and interactive consultation, ensuring<br /><span className="ml-[100px]">transparency and community involvement in city planning decisions</span>
                    </Text>
                </div>
                {/* <div className="self-stretch">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 md:flex-col"> */}
                {/* <div className="flex w-full flex-col items-start justify-end bg-blue_gray-800_b2 py-[86px] md:py-5 sm:p-5">

                                <Heading
                                    size="heading2xl"
                                    as="h5"
                                    className="mt-16 !text-[48px] !font-bold capitalize leading-[64px] md:!text-[44px] sm:!text-[38px] z-10"
                                >
                                    <>
                                        aaaaaaaaaaaaaaaa
                                        <br />
                                        aaaaaaaaaa
                                    </>
                                </Heading>
                                <Text as="p" className="mt-4 w-full leading-[26px] z-10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.{" "}
                                </Text>
                                <Button color="gray_600" shape="square" className="mt-10 min-w-[150px] font-bold">
                                    See More
                                </Button>
                            </div> */}
                {/* <div className="flex w-full flex-col items-start justify-end bg-blue_gray-800_b2 py-[86px] md:py-5 sm:p-5">
                                <Heading
                                    size="heading2xl"
                                    as="h5"
                                    className="mt-16 !text-[48px] !font-bold capitalize leading-[64px] md:!text-[44px] sm:!text-[38px]"
                                >
                                    <>
                                        aaaaaaaaaaaaaaaa
                                        <br />
                                        aaaaaaaaaa
                                    </>
                                </Heading>
                                <Text as="p" className="mt-4 w-full leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.{" "}
                                </Text>
                                <Button color="gray_600" shape="square" className="mt-10 min-w-[150px] font-bold">
                                    See More
                                </Button>
                            </div> */}
                {/* </div>
                        <div className="flex gap-4 md:flex-col"> */}
                {/* <div className="flex w-full flex-col items-start justify-end bg-blue_gray-800_b2 py-[86px] md:py-5 sm:p-5">
                                <Heading
                                    size="heading2xl"
                                    as="h5"
                                    className="mt-16 !text-[48px] !font-bold capitalize leading-[64px] md:!text-[44px] sm:!text-[38px]"
                                >
                                    <>
                                        aaaaaaaaaaaaaaaa
                                        <br />
                                        aaaaaaaaaa
                                    </>
                                </Heading>
                                <Text as="p" className="mt-4 w-full leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.{" "}
                                </Text>
                                <Button color="gray_600" shape="square" className="mt-10 min-w-[150px] font-bold">
                                    See More
                                </Button>
                            </div> */}
                {/* <div className="flex w-full flex-col items-start justify-end bg-blue_gray-800_b2 py-[86px] md:py-5 sm:p-5">
                                <Heading
                                    size="heading2xl"
                                    as="h5"
                                    className="mt-16 !text-[48px] !font-bold capitalize leading-[64px] md:!text-[44px] sm:!text-[38px]"
                                >
                                    <>
                                        aaaaaaaaaaaaaaaa
                                        <br />
                                        aaaaaaaaaa
                                    </>
                                </Heading>
                                <Text as="p" className="mt-4 w-full leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.{" "}
                                </Text>
                                <Button color="gray_600" shape="square" className="mt-10 min-w-[150px] font-bold">
                                    See More
                                </Button>
                            </div> */}
                {/* </div>
                    </div>
                </div> */}
                <div className="grid grid-cols-2 justify-center gap-6 md:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <RiversideParkDevelopment {...d} key={"projectscolored" + index} />
                        ))}
                    </Suspense>
                </div>
                <Button color="gray_600" shape="square" className="min-w-[162px] font-bold">
                    Explore All
                </Button>
            </div>
        </div>
    );
}