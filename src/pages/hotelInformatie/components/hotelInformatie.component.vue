<template>
    <div id="informatie-wrapper">
        <div id="top-informatie">
            <div id="image-container">
                <img :src="hotel.img" alt="hotel image">
            </div>
            <div id="info-voorzieningen">
                <h2>Populaire voorzieningen</h2>
                <ul>
                    <li v-for="(voorziening,index) in hotel.voorzieningen" :key="index"><img :src="voorziening.img" alt="">{{voorziening.naam}}</li>
                </ul>
            </div>
        </div>
        <div id="beschrijving">
            <h2>Beschrijving</h2>
            <p>Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ad voluptates porro tempore nemo, expedita cum, consequuntur iste odio voluptatum repellendus aliquid reiciendis voluptate dolore vitae enim mollitia maxime vero inventore ipsam dolores. Obcaecati iusto, et ea quia suscipit autem praesentium rerum. Repellendus, ab. Quasi dolorem sint repudiandae reiciendis illo. Repellat molestias eaque nostrum assumenda fuga ad dolorem doloribus quis, qui magnam explicabo provident enim consectetur recusandae voluptatem cupiditate omnis blanditiis quaerat quia consequuntur rerum obcaecati id. Asperiores non porro fugiat nihil iure corporis facere earum voluptates, mollitia quis consequuntur vero culpa ut? Nam illo, mollitia dolorem labore itaque doloribus autem adipisci hic consequatur ab possimus nihil suscipit quasi! Nam exercitationem, veniam praesentium ea recusandae optio ad deserunt eum totam repudiandae odit impedit sequi soluta laboriosam quidem, nemo quos, debitis accusamus assumenda ratione odio fugiat sit ex magni? Voluptates fugit libero cumque officiis sit. Magni porro tempora quisquam aut est et veniam id unde quam! Optio beatae iste minus accusantium ad, explicabo quidem in cumque assumenda maiores doloremque fugiat quod vel, at suscipit fuga porro commodi consectetur. Dicta maiores, repellendus dolorem non cumque nulla beatae, eius, deserunt perferendis voluptatem similique! Rem tempore nobis blanditiis quas, quis maxime optio ab minima porro libero quae adipisci sint quaerat dicta asperiores. Ad adipisci repellat ab, alias mollitia aut delectus doloribus saepe. Amet, distinctio facere optio pariatur cupiditate qui hic illo, aliquid sunt voluptas reprehenderit ipsa aperiam tempore quibusdam eaque magni facilis a molestias nesciunt beatae neque. Rerum voluptates eligendi blanditiis totam reprehenderit aliquam consequuntur veritatis quis quidem praesentium, corrupti consectetur. Repudiandae consectetur expedita optio distinctio non aspernatur excepturi similique. Nemo quam rem ad, architecto, sunt distinctio ut praesentium placeat ex velit, asperiores libero fugiat aliquam doloremque aliquid error similique necessitatibus voluptatem odio tempora facilis perspiciatis dolorem porro? Assumenda quidem optio eligendi eaque repudiandae similique qui nostrum debitis quibusdam incidunt laudantium, illo saepe vitae veritatis adipisci odio inventore ipsam quos ex voluptatem sint ab. Repellendus perferendis assumenda facere, natus reiciendis harum temporibus, nobis ullam at molestiae quod expedita inventore similique eligendi labore sequi velit vero quibusdam? Repellendus quam eum velit neque! Ullam porro vitae, quisquam libero blanditiis dolores, dolorem voluptatibus maxime expedita ratione quod harum molestiae iste sed quae qui ea eos hic consectetur cupiditate labore in rem reiciendis numquam. Deserunt perferendis consequatur iste provident dolorem necessitatibus id repellendus sit atque possimus! Totam aliquid ducimus suscipit quas placeat architecto sed accusantium fugiat, deleniti unde! Nesciunt placeat earum eligendi, harum amet culpa quis in commodi, vero minima consequuntur minus? Quod quia ratione nisi cupiditate nemo est, mollitia libero impedit perspiciatis nostrum maiores ipsa, magnam a? Aperiam ut ducimus libero qui. Aperiam, quam porro aspernatur magni aut eveniet doloribus distinctio dicta perferendis, nulla iste ipsam et doloremque reprehenderit deleniti laborum? Aspernatur quia autem, perferendis consectetur saepe pariatur vitae facilis facere expedita. Neque vitae ex incidunt impedit labore, aperiam quaerat recusandae eius? Iusto error nihil aperiam pariatur animi dignissimos assumenda, asperiores cupiditate. Cumque placeat odio ipsam ullam. Eum, nesciunt aliquid laborum deserunt quo quidem, sit incidunt beatae non atque natus fugiat pariatur delectus corporis quae ab quasi minima amet totam in! Quia magnam velit laudantium recusandae repellendus debitis molestias quam cum. Nemo sint expedita, debitis in iste dicta unde quia nisi ducimus facilis ut quisquam animi voluptatum amet accusantium nam, veritatis laboriosam asperiores illum totam consequatur. Magnam nobis quos, consectetur dolor laboriosam suscipit voluptas id nostrum eius vitae? Amet ratione sapiente quae sed quia consequuntur. Amet, culpa vitae, repudiandae expedita quidem quisquam sapiente illum suscipit quae, ab mollitia minus sint voluptatibus assumenda nam! Iusto quisquam quis quidem deleniti, libero a, enim eius pariatur odio quasi sunt quas.</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"hotel-informatie",
    props:{
        hotel:{
            type: Object,
            required: true
        }
    }

}
</script>

<style>
#top-informatie{
    display: grid;
    grid-template-columns:  60% 40%;
    grid-gap: 4%;
}
#image-container img{
    width:100%;
}
#info-voorzieningen h2{
    border-bottom: 1px solid lightgray;
}
#info-voorzieningen ul{
    padding-top: 1%;
    list-style-type: none;
    padding-left: 0;
    font-weight: 600;
}
#info-voorzieningen ul li img{
    width: 20px;
    padding-right: 5px;
}
#beschrijving h2{
    border-bottom: 1px solid lightgray;
    margin-bottom: 1%;
}
</style>
