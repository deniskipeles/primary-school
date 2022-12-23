<script>
    const attendance = [
  {
    week: 1,
    created_at: '2022-01-01',
    date: '2022-01-01',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  },
  {
    week: 2,
    created_at: '2022-01-08',
    date: '2022-01-08',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  },
  {
    week: 3,
    created_at: '2022-01-15',
    date: '2022-01-15',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  },
  {
    week: 4,
    created_at: '2022-01-22',
    date: '2022-01-22',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  },
  {
    week: 5,
    created_at: '2022-01-29',
    date: '2022-01-29',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  },
  {
    week: 6,
    created_at: '2022-02-05',
    date: '2022-02-05',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  },
  {
    week: 7,
    created_at: '2022-02-12',
    date: '2022-02-12',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  },
  {
    week: 8,
    created_at: '2022-02-19',
    date: '2022-02-19',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  },
  {
    week: 9,
    created_at: '2022-02-26',
    date: '2022-02-26',
    class: {
      name: 'Class of 2022',
      class_type: {
        name: 'Grade One'
      }
    },
    present: true,
    excuse: ''
  }
]



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

<section class="mb-20 text-gray-700  px-81" >
  <Table color="red">
  <!-- <CreateStudentDrawer {token}/> -->
  <!-- <TableSearch
  color="red"
  placeholder="Search by maker name"
  hoverable={true}
  bind:inputValue={searchTerm}
  > -->
  <TableHead>
    <TableHeadCell>Week</TableHeadCell>
    <!-- <TableHeadCell>Created At</TableHeadCell> -->
    <TableHeadCell>Date</TableHeadCell>
    <TableHeadCell>Class</TableHeadCell>
    <TableHeadCell>Present</TableHeadCell>
    <TableHeadCell>Excuse</TableHeadCell>
  </TableHead>
  
  <TableBody>
    {#each attendance as item}
    <TableBodyRow>
      <TableHeadCell>{item.week}</TableHeadCell>
          <!-- <TableHeadCell>{item.created_at}</TableHeadCell> -->
          <TableHeadCell>{item.date}</TableHeadCell>
          <TableHeadCell>{item.class.name} ({item.class.class_type.name})</TableHeadCell>
          <TableHeadCell>{item.present ? 'Yes' : 'No'}</TableHeadCell>
          <TableHeadCell>{item.excuse || '-'}</TableHeadCell>
    </TableBodyRow>
    {/each}
  </TableBody>
  <!-- </TableSearch> -->
  </Table>


</section>  
