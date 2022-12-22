<script>
	import '../app.css';
	import {
		Sidebar,
		SidebarWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem,
		DarkMode
	} from 'flowbite-svelte';

	import {
		ChartPie,
		ViewGrid,
		InboxIn,
		User,
		Login,
		Cog,
		ShoppingBag,
		ShoppingCart,
		Table,
		Key
	} from 'svelte-heros';

	import { Side, Nav, Responsive } from 'svelte-sidebar-menu';

	import { quartInOut } from 'svelte/easing';
  	import StudentSideBar from '$lib/components/StudentSideBar.svelte';
  	import {CONSTANTS} from '$lib/CONSTANTS.js';
  

	// Darkmode component
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-2 top-24 z-50';

	// Side component
	let siteName = 'Svelte-Sidebar';

	let siteClass = 'w-1/4 h-12 text-lg pt-3 pl-12';

	let headerClass =
		'bg-white px-10 items-center text-gray-600 border-b-2 p-4 dark:bg-gray-900 dark:text-white';

	let hamburgerClass =
		'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden';

	let topDiv = 'w-full md:block md:w-auto absolute top-16 md:top-1 px-8';

	let topMenuDiv = 'container flex flex-wrap justify-end mx-auto pt-0 md:pt-2';

	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-white dark:bg-gray-900 dark:text-white';

	let childLi =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg dark:text-white';

	let asideClass =
		'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll dark:bg-gray-900 dark:text-white';

	let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';

	// Nav component
	let navClass = 'py-8 px-4 text-lg';

	let navDivClass = 'pb-8';

	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};

	const topMenuList = [
		{ href: '/questions', name: 'Questions' },
		{ href: '/notes', name: 'Notes' },
		{ href: '/about', name: 'About Us' }
	];

	import { school } from "$lib/store/school";
	import { supabase } from "$lib/supabase";
	import { onMount } from 'svelte';
  	import Footer from '$lib/components/Footer.svelte';

	onMount(async()=>{
		let { data: schoolData, error } = await supabase
			.from('schools')
			.select("*")
			// Filters
			.eq('id', CONSTANTS.school)
			.limit(1)
			.single()
		school.set(schoolData)
		console.log(schoolData,error)
	})


</script>

<DarkMode {btnClass} />
<Responsive />
<Side
	siteName={$school ? $school.logo_name : "primary school"}
	{siteClass}
	{headerClass}
	{hamburgerClass}
	{topDiv}
	{topMenuDiv}
	{topul}
	{childLi}
	{asideClass}
	{spanClass}
	{transitionParams}
	topMenus={topMenuList}
>
	<Nav {navClass} {navDivClass}>
		<StudentSideBar/>
	</Nav>
</Side>
<main class="container mx-auto py-32 px-8 lg:pl-80 pr-8 dark:text-white ">
	<slot />
	<Footer/>
</main>

<svelte:head>
	<title>{$school ? $school.name : "school name"}</title>
	<meta
		name="description"
		content="Flowbite-Svelte-Starter is a quick way to start Svelte and Flowbite/Tailwind CSS. It comes with SvelteKit, Tailwind CSS, Flowbite,
		Flowbite-Svelte, ESlint, Typescript, Playwright, Prettier, Svelte-heros (Heroicons), Dark mode activated."
	/>
</svelte:head>