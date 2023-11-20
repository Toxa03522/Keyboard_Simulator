import { DetailedHTMLProps, HTMLAttributes } from "react";

import Image from "next/image";

import cn from 'classnames';
import styles from './Theory.module.scss';

import Title from "@/components/Title/Title";

interface TrainerProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Trainer = ({ className, ...props }: TrainerProps): JSX.Element => {
    return (
        <main className={cn(className, styles.trainer)} {...props}>
            <Title position="center" type="h1">Теория</Title>
            <div className={styles.wrapper}>
                <div className={styles.description}>
                    <Title type="h2">Методы слепой печати</Title>
                    <p>Самый распространенный метод — обычный десятипальцевый. Суть метода в том, что в исходной позиции пальцы рук (кроме больших) находятся над клавишами &quot;Ф Ы В А&quot; и &quot;О Л Д Ж&quot; в русской раскладке «ЙЦУКЕН» (&quot;A S D F&quot; и &quot;J K L :&quot; в английской «QWERTY»), большие — над пробелом. Остальные кнопки нажимаются теми пальцами, которыми проще всего до них дотянуться.</p>
                    <p>Однако этот метод далеко не единственный. Например, существует «альтернативный» десятипальцевый метод, который кажется многим удобнее обычного. В нем исходная позиция не &quot;Ф Ы В А&quot; — &quot;О Л Д Ж&quot;, а &quot;Ы В А М&quot; — &quot;Т О Л Д&quot; (указательные пальцы в нижнем ряду, на буквах М и Т). Он хорош тем, что руки расположены более естественно, кисти рук не выгнуты наружу (особенно это заметно, когда клавиатура находится близко к телу). Но есть и недостаток — нагрузка на мизинцы, которыми приходится нажимать большее число клавиш и тянуться дальше.</p>
                    <p>Оба этих метода основаны на том, что каждая кнопка нажимается одним и тем же пальцем, которым ее нажимать удобнее всего. Таким образом, можно добиться очень большой, но не максимальной скорости — дело в том, что если последовательность букв, которые нажимаются разными пальцами, можно набрать практически мгновенно, то буквы одного и того же пальца волей-неволей придется нажимать последовательно, что отрицательно сказывается на скорости. На помощь приходит адаптивный метод печати, который обычно индивидуален для каждого: нужно (в идеале) нажимать каждую кнопку тем пальцем, которым ее в данный момент быстрее всего нажать. При этом одна и та же буква может набираться разными пальцами в зависимости от предыдущих и следующих букв. Каких-либо конкретных правил и обучалок не существует (по крайней мере, я не нашёл). Овладеть таким методом, вероятно, непросто, но он позволяет добиться фантастических скоростей (более 600 знаков за минуту в среднем).</p>
                </div>
                <Image className={styles.image} src="/Images/theory/theory5.jpg" alt="Теория" width={400} height={400}/>
            </div>
            <div className={styles.wrapper}>
                <Image className={styles.image} src="/Images/theory/theory2.jpg" alt="Теория" width={400} height={400}/>
                <div className={styles.description}>
                    <Title type="h2">Десятипальцевый метод</Title>
                    <p>Слепой метод печати (американский слепой десятипальцевый метод набора) – ввод текста на клавиатуре или пишущей машинке, при котором человек не смотрит на клавиши и печатает десятью пальцами.</p>
                    <p>Научиться печатать быстро и без ошибок можно только при строгом распределении клавиш клавиатуры между всеми десятью пальцами. В русской раскладке, изначально пальцы (кроме больших) располагаются в позиции &quot;Ф Ы В А&quot; и &quot;О Л Д Ж&quot;, а в английской — &quot;A S D F&quot; и &quot;J K L :&quot;.</p>
                    <p>Клавиатура компьютера спроектирована таким образом, что позволяет выполнять все необходимые операции: печатать, редактировать и форматировать текст без использования мыши. Что даже быстрее, при наличии некоторой практики.</p>
                    <p><strong>Совет: </strong><i>Постарайтесь не нажимать на клавиши не теми пальцами, впоследствии это может сильно снизить вашу скорость печати, хотя, возможно, поначалу вам покажется, что так проще.</i></p>
                    <p>При выполнении упражнений следует добиваться полного автоматизма, когда вы печатаете лишь механически, нажимая клавиши в нужной последовательности не задумываясь о их расположении на клавиатуре.</p>
                    <p><strong>Совет: </strong><i>Для более эффективного изучения десятипальцевого метода нужно заниматься ежедневно.</i></p>
                    <p>Практический курс обучения основан на ряде упражнений, выполнение которых сводится к набору специальным образом подобранного текста. Переходите от одного упражнения к другому только после выполнения требований к качеству печати.</p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.description}>
                    <Title type="h2">Посадка и положение рук</Title>
                    <p>При работе за компьютером очень важно правильно сидеть. Стул должен быть отрегулирован по высоте. Сидите прямо, не касаясь спинки стула. Ноги держите под столом одну возле другой; не рекомендуется их вытягивать вперед или прятать под стул. Плечи не напрягайте. Руки от плечевого до локтевого сустава должны быть свободно опущены вниз и идти параллельно туловищу. Кисти рук не должны касаться клавиатуры, локти слегка касаются туловища. В локтевом суставе их сгибают примерно под углом 90°. Предплечья направляют к центру клавиатуры, пальцы свободно опускают на клавиши, кисти подтягивают к центру. Кисти, предплечья и локоть должны находиться на одном уровне с клавиатурой. Передние края клавиатуры и стола должны совпадать.</p>
                    <p><strong>Совет: </strong><i>Купите мягкую подкладку под запястья. Во-первых, она поднимет ваши запястья на уровень клавиатуры, а во-вторых, запястья не будут передавливаться снизу ребром стола.</i></p>
                    <p><strong>Совет: </strong><i>При отработке первых ударов по клавишам не забывайте о положении локтей. Не следует слишком сильно прижимать их к туловищу или далеко отводить в стороны. От плеча руки должны быть свободно опущены вниз, иначе кисти примут неправильное положение на клавиатуре.</i></p>
                </div>
                <Image className={styles.image} src="/Images/theory/theory3.jpg" alt="Теория" width={400} height={400}/>
            </div>
            <div className={styles.wrapper}>
                <Image className={styles.image} src="/Images/theory/theory4.jpg" alt="Теория" width={400} height={400}/>
                <div className={styles.description}>
                    <Title type="h2">Ритм печати</Title>
                    <p>Ритм печати — это чередование ударов по клавишам через равномерные промежутки времени. Чем короче промежутки между ударами, тем выше скорость печати.</p>
                    <p><strong>Совет: </strong><i>При работе на компьютере необходимо соблюдать определенный ритм, равномерно выполнять удары по клавишам. Лишь в этом случае можно добиться высокой скорости печати.</i></p>
                    <p>Удары по клавишам должны быть отрывистыми и несильными, но резкими, без задержки пальца на клавише; движение пальцев к клавишам соответствующей зоны — точными. Удар выполняется подушечками пальцев, в нем принимают участие и кисти рук. При печати руку поднимают над клавиатурой примерно на 1-2 см, а затем быстро и энергично ударяют по нужной клавише и возвращают палец на исходную позицию. Сила удара должна быть достаточной для достижения отрывистости удара.</p>
                    <p><strong>Совет: </strong><i>Для быстрой печати следует соблюдать равномерный ритм с постепенным увеличением темпа, то есть сокращением промежутков времени между ударами по клавишам.</i></p>
                    <p>С первых уроков необходимо добиваться независимых движений пальцев: когда один палец выполняет удар, другие расслаблены. Мышцы пальцев должны действовать во время выполнения удара, а сразу после него расслабляться.</p>
                    <p>На первом этапе лучше проговаривать в уме те буквы, которые вы собираетесь печатать. Нормальной скоростью печати на начальных стадиях процесса обучения следует считать 50-70 знаков в минуту, в дальнейшем она возрастает, достигая 200-300 знаков в минуту. Каждый урок должен длиться не менее 30 минут.</p>
                    <p><strong>Совет: </strong><i>Не гонитесь за скоростью, обращайте особое внимание на безошибочность печати. Скорость печати легко увеличить в процессе повседневной работы, после того, как вы уже освоили клавиатуру в полном объеме.</i></p>
                    <p>Автоматизм движения пальцев вырабатывается в результате продолжительной тренировки. Слепой метод печати можно считать освоенным только тогда, когда оператор перестает контролировать движение пальцев на клавиатуре. Скорость печати при слепом методе возрастает в полтора-два раза, улучшается качество. Работая по слепому десятипальцевому методу, можно достичь рекордной скорости, в идеале — до 500 ударов в минуту.</p>
                </div>
            </div>
        </main>
    );
}

export default Trainer;