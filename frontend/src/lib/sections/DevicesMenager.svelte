<script lang="ts">
    import Paper, { Title, Subtitle, Content,  } from '@smui/paper';
    import { Device, DeviceType } from '../../FirebaseTypes';
    import Fab, { Icon } from '@smui/fab';
    import DeviceAdder from './DeviceAdder.svelte';
    import IconButton from '@smui/icon-button';

    let isDeviceAdderOpened = false;
    let devices: Device[] = [
        {
            code: 'JoyCon',
            name: "JoyCon",
            type: DeviceType.Accelerometer,
            description: ""
        },
        {
            code: 'Laptop',
            name: "Laptop",
            type: DeviceType.Mouse,
            description: "Laptop Łukasza",
        }
    ]

    function addDevice(device: Device) {
        if(devices.some(d => d.code === device.code)) {
            return false;
        }

        devices = [...devices, device]
        return true;
    }

    function deleteDevice(code: string) {
        return () => {
            devices = devices.filter(d => d.code !== code)
            devices = devices
        }
    }
</script>

<div style="margin: auto; width: calc(100vw - 100px);">
    {#each devices as { name, description, type, code }}
        <Paper style="margin: 20px;">
            <IconButton class="material-icons delete-device-button" on:click={deleteDevice(code)}>delete</IconButton>
            <Title>{name}</Title>
            <Subtitle>Device type: {type}</Subtitle>
            <Content>{description}</Content>
        </Paper>
    {/each}
</div>

<Fab class="add-device-button" on:click={() => isDeviceAdderOpened = true}>
    <Icon class="material-icons">add</Icon>
</Fab>

<DeviceAdder bind:open={isDeviceAdderOpened} {addDevice}/>

<style>
    :global(.add-device-button) {
        position: fixed;
        bottom: 16px;
        right: 16px;
    }

    :global(.delete-device-button) {
        position: absolute;
        transform: translate(calc(100vw - 210px), -20px);
    }
</style>