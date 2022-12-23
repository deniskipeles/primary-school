<script>
  import { user } from "$lib/store/user";
  import { supabase } from "$lib/supabase";


  import { Sidebar, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte";
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
		Key,
        Logout
	} from 'svelte-heros';
   let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';

    async function logout() {
        try {
            let { error } = await supabase.auth.signOut()
            user.set(null)
            console.log('Successfully logged out')
            if (error) {
                console.error(error)
            }
        } catch (error) {
            console.error(error)
        }
    }
</script>
<div>
    <Sidebar>
        <SidebarWrapper>
            <SidebarGroup>
                <SidebarItem
                    href={`/attendance`}
                    label="Attendance"
                    icon={{ name: ChartPie, class: 'text-red-500 mr-2 dark:text-blue-500' }}
                />
                <SidebarDropdownWrapper
                    label="Classes"
                    icon={{ name: ShoppingCart, class: 'text-blue-500 mr-2 dark:text-pink-500' }}
                >
                    <SidebarDropdownItem label="Syllabus" />
                    <SidebarDropdownItem label="Class Mates" />
                    <SidebarDropdownItem label="Class Teachers" />
                </SidebarDropdownWrapper>
                <SidebarDropdownWrapper
                    label="Exams"
                    icon={{ name: ShoppingCart, class: 'text-blue-500 mr-2 dark:text-pink-500' }}
                >
                    <SidebarDropdownItem label="Results" />
                    <SidebarDropdownItem label="Marks" />
                    <SidebarDropdownItem label="CATs" />
                </SidebarDropdownWrapper>
                <SidebarDropdownWrapper
                    label="Test"
                    icon={{ name: ShoppingCart, class: 'text-blue-500 mr-2 dark:text-pink-500' }}
                >
                    <SidebarDropdownItem label="Results" />
                    <!-- consist of test,questions and answers -->
                    <SidebarDropdownItem label="Take Test" />
                    <SidebarDropdownItem label="Contest" />
                </SidebarDropdownWrapper>
                <SidebarItem
                    label="Fee Statement"
                    {spanClass}
                    icon={{ name: ViewGrid, class: 'text-green-500 mr-2 dark:text-purple-500' }}
                >
                    <!-- <svelte:fragment slot="subtext">
                        <span
                            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
                            >Pro</span
                        >
                    </svelte:fragment> -->
                </SidebarItem>
                <SidebarItem
                    label="Library"
                    {spanClass}
                    icon={{ name: InboxIn, class: 'text-yellow-500 mr-2 dark:text-green-500' }}
                >
                    <!-- <svelte:fragment slot="subtext">
                        <span
                            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
                            >3</span
                        >
                    </svelte:fragment> -->
                </SidebarItem>
                <SidebarItem
                    label="Home"
                    icon={{ name: User, class: 'text-blue-500 mr-2 dark:text-pink-500' }}
                />
                {#if $user}
                    <SidebarItem
                        on:click={logout}
                        label="Logout"
                        icon={{ name: Logout, class: 'text-green-500 mr-2 dark:text-yellow-500' }}
                    />
                {/if}
                {#if $user == null}
                    <SidebarItem
                        label="Sign In"
                        href={`/login`}
                        icon={{ name: Login, class: 'text-green-500 mr-2 dark:text-yellow-500' }}
                    />
                {/if}
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>
</div>