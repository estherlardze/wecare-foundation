// volunteersData.ts

export type VolunteerType = {
	name: string;
	photo: string;
	role: string;
	description: string;
	id: number;
};

export const volunteers: VolunteerType[] = [
	{
		name: "John Neuman",
		photo: "/JN8.jpg",
		role: "Founder",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, aperiam voluptas nulla tempore reiciendis quis fugiat nihil optio accusantium iste consectetur recusandae molestias, distinctio illo?",
		id: 1,
	},
	{
		name: "Amo Kofi",
		photo: "/Amo Kofi.jpg",
		role: "Co-Founder",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, aperiam voluptas nulla tempore reiciendis quis fugiat nihil optio accusantium iste consectetur recusandae molestias, distinctio illo?",
		id: 2,
	},
	{
		name: "Albert Churchill",
		photo: "/Albert-Churchill.jpg",
		role: "Volunteer",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, aperiam voluptas nulla tempore reiciendis quis fugiat nihil optio accusantium iste consectetur recusandae molestias, distinctio illo?",
		id: 3,
	},

	// {
	// 	name: "Bransema",
	// 	photo: "/Bransema.JPG",
	// 	role: "",
	// 	description: "",
	// 	id: 4,
	// },

	// {
	// 	name: "Bright Akotua",
	// 	photo: "/Bright-Akotua.jpg",
	// 	role: "",
	// 	description: "",
	// 	id: 5,
	// },

	// {
	// 	name: "Jerry Atanga",
	// 	photo: "/Jerry-Atanga.jpg",
	// 	role: "",
	// 	description: "",
	// 	id: 6,
	// },

	// {
	// 	name: "Michael Odei Larbi",
	// 	photo: "/Michael-Odei-Larbi.jpg",
	// 	role: "",
	// 	description: "",
	// 	id: 7,
	// },

	// {
	// 	name: "",
	// 	photo: "/AFR.jpg",
	// 	role: "",
	// 	description: "",
	// 	id: 8,
	// },
];
