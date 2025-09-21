export default defineEventHandler(async (event) => {
    handleCors(event, {
    origin: ['https://www.weweb.io/'],
    credentials: true,
    methods: '*',
    allowHeaders: '*',
    })
    if (event.node.req.method === 'OPTIONS') {
    return null
    }
}