<script>
	import '$lib/styles.css';
  	// import { school } from '$lib/store/school';
	// import CreateStudentDrawer from '$lib/components/CreateStudentDrawer.svelte';
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabase';
    import { CONSTANTS } from '$lib/CONSTANTS';
	// export let data;
	$: students = []
	$: token = null //data.session?.access_token

    onMount(async()=>{
        let { data: studentsData, error } = await supabase
		.from('students')
		.select(`
			id,
			name,
			admission,
			date_of_birth,
			admitted_on,
			complete_on,
			location(
				name
			),
			student_class(
				complete_on,
				since,
				complete,
				class(
					name,
					class_type(
						name
					)
				)
			)
		`)
		.eq('school_id',CONSTANTS.school)

        students = studentsData

    })
	let searchTerm = '';
	$: filteredItems = students.filter(
		(item) => (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (item.admission.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
	);

</script>

<!-- <svelte:head>
	<title>{$school ? $school.name : "school"} students</title>
	<meta name="description" content="HTML, dynamically rendered in a city near you" />
</svelte:head> -->


<!-- <CreateStudentDrawer {token}/> -->
<TableSearch
color="red"
placeholder="Search by maker name"
hoverable={true}
bind:inputValue={searchTerm}
>
<TableHead>
	<TableHeadCell>ID</TableHeadCell>
	<TableHeadCell>Name</TableHeadCell>
	<TableHeadCell>Started On</TableHeadCell>
	<TableHeadCell>To Complete On</TableHeadCell>
	<TableHeadCell>Date Of Birth</TableHeadCell>
	<TableHeadCell>Home</TableHeadCell>
</TableHead>
<TableBody class="divide-y">
	{#each filteredItems as item}
	<TableBodyRow>
		<TableBodyCell>{item.admission}</TableBodyCell>
		<TableBodyCell>{item.name}</TableBodyCell>
		<TableBodyCell>{item.admitted_on}</TableBodyCell>
		<TableBodyCell>{item.complete_on}</TableBodyCell>
		<TableBodyCell>{item.date_of_birth}</TableBodyCell>
		<TableBodyCell>{item.location.name}</TableBodyCell>
	</TableBodyRow>
	{/each}
</TableBody>
</TableSearch>