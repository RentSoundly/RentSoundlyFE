import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
  server:{
	  host: "172.232.173.160",
//	  https: {
//		  key: fs.readFileSync('/home/pax/example_com.key'),
//		  cert: fs.readFileSync('/home/pax/rentsoundly_net.crt'),
//	  }
}
}
)
