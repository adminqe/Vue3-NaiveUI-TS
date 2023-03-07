import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            dts: 'src/types/auto-import.d.ts',
            imports: [
                'vue',
                {
                    'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
                },
            ],
        }),
        Components({
            dts: 'src/types/components.d.ts',
            resolvers: [NaiveUiResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3200,
        open: true,
    },
})
