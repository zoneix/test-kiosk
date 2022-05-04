//import process from "process"

export const scope ="spark%3Aall%20spark%3Akms";
//export const scope = `spark-admin%3Aresource_groups_read%20spark%3Aall%20spark-admin%3Aorganizations_write%20spark-admin%3Apeople_write%20spark-admin%3Aroles_read%20spark-admin%3Aorganizations_read%20spark%3Aorganizations_read%20spark%3Adevices_write%20spark%3Axapi_statuses%20spark-admin%3Aworkspaces_read%20spark-admin%3Aplaces_read%20spark%3Adevices_read%20spark-admin%3Aresource_group_memberships_read%20spark%3Axapi_commands%20spark-admin%3Aresource_group_memberships_write%20spark%3Akms%20spark-admin%3Adevices_read%20spark-admin%3Aplaces_write%20spark-admin%3Adevices_write%20spark-admin%3Apeople_read`;
// export const redirect_uri = 'https://kaleida.ngrok.io';
export const redirect_uri = "https://zoneix.github.io/test-kiosk/";
export const client_id = 'C528366e7b984ec123fc2836259456ce03a9a8791b4434fa06c740a7468919416';
export const auth_url = "https://webexapis.com/v1/access_token";
export const client_secret = "6757ff0a53071a3e039fbbe32c9a86df1e3b6675cd241dcd3befc37b8bd5b281";
export const login_url = `https://webexapis.com/v1/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scope}`;
// export const server_url =  "https://webexpresencedevice.ngrok.io"; 
export const server_url = "https://presence-device.herokuapp.com";
