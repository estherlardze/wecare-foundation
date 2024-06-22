// volunteersData.ts

export type VolunteerType = {
	name: string;
	photo: string;
	role: string;

	id: number;
};

export const volunteers: VolunteerType[] = [
	{
		name: "John Neuman",
		photo: "/JN8.jpg",
		role: "Founder",

		id: 1,
	},
	{
		name: "Amo Kofi",
		photo: "/Amo Kofi.jpg",
		role: "Co-Founder",

		id: 2,
	},
	{
		name: "Albert Churchill",
		photo: "/Albert-Churchill.jpg",
		role: "Volunteer",

		id: 3,
	},

	{
		name: "Bransema",
		photo: "/Bransema.JPG",
		role: "Volunteer",

		id: 4,
	},

	{
		name: "Bright Akotua",
		photo: "/Bright-Akotua.jpg",
		role: "Volunteer",

		id: 5,
	},

	{
		name: "Jerry Atanga",
		photo: "/Jerry-Atanga.jpg",
		role: "Volunteer",

		id: 6,
	},

	{
		name: "Michael Odei Larbi",
		photo: "/Michael-Odei-Larbi.jpg",
		role: "Volunteer",

		id: 7,
	},

	{
		name: "",
		photo: "/AFR.jpg",
		role: "Volunteer",

		id: 8,
	},
];
