import React from 'react'
import {
  Card,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import Categories from './Categories'
import Header from './Header'

export default function Home() {
  const mainStyle = {
    backgroundImage: "url('../images/liberary.jpg')",

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <>
      <main style={mainStyle} dir="rtl">
        <Header />

        <Grid container>
          <Grid item md={12} sm={12} sx={{ mt: '1rem' }}>
            <Typography
              variant="h3"
              sx={{ mt: '3rem', textAlign: 'center', fontWeight: 'bold' }}
            >
              {' '}
              نبذة عن الكلية{' '}
            </Typography>
            <Card sx={{ width: '100%', mt: '1rem' }}>
              <div className="myContainer">
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    lineHeight: '2rem',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  المؤسسة العامة للتدريب التقني والمهني هي الجهة الحكومية
                  المعنية بالتدريب التقني والمهني في المملكة العربية السعودية
                  منذ عام 1400هـ/1980م، وتختص المؤسسة بتنمية الموارد البشرية
                  الوطنية من خلال التدريب، بما يسهم في سد احتياجات سوق العمل من
                  القوى البشرية منذ صدور قرار مجلس الوزراء بالموافقة على تنظيم
                  المؤسسة بالقرار رقم م/30 وتاريخ 10 شعبان 1400هـ. وقد صدر قرار
                  مجلس الوزراء الموقر رقم (‏268) وتاريخ 14 شعبان 1428هـ بإعادة
                  تنظيمها، وتحديد مهامها وأهدافها. وتقدم المؤسسة العامة للتدريب
                  التقني والمهني برامج التدريب التقني والمهني للذكور والإناث
                  وفقًا لطلب سوق العمل الكمي والنوعي، حيث تقدم العديد من البرامج
                  التدريبية في منشآتها التدريبية من كليات تقنية ومعاهد، وكذلك في
                  معاهد الشركات الاستراتيجية، والكليات التقنية العالمية،
                  بالإضافة إلى برامج تدريبية في منشآت التدريب الأهلي، وبرامج
                  مساندة مجتمعية مرنة. ويصل العدد الإجمالي لمنشآت المؤسسة العامة
                  للتدريب التقني والمهني 283 منشأة تغطي كافة أرجاء المملكة
                  العربية السعودية. وبحسب نتائج مؤشر المعرفة العالمي الصادر عن
                  برنامج الأمم المتحدة الإنمائي ومؤسسة محمد بن راشد آل مكتوم
                  للمعرفة، تحتل المؤسسة العامة للتدريب التقني والمهني المرتبة
                  التاسعة عالمياً للعام 2021م، بعد أن كانت تحتل المرتبة الثانية
                  عشر في عام 2020م، والمرتبة 86 في عام 2019م، والمرتبة 117 في
                  عام 2018م. ويسعى مؤشر المعرفة العالمي إلى توفير مدخل للدول
                  للنهوض بإستراتيجيات التفكير المتقدم في تعزيز اقتصادات المعرفة
                  القوية، حيث يقيس المعرفة على مستوى العالم، كمفهوم شامل ويرتبط
                  ارتباطاً وثيقاً بالتنمية المستدامة وبمختلف أبعاد الحياة
                  الإنسانية المعاصرة.
                </Typography>
              </div>
            </Card>
          </Grid>
          {/* <Grid item md={12} sm={6} sx={{ mt: '1rem' }}>
            <Typography
              variant="h4"
              sx={{ textAlign: 'center', bgcolor: '#e0f2f1', p: 3 }}
            >
              الادارات المساندة
            </Typography>
            <Card sx={{ width: '100%', mt: '1rem' }}>
              <List>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  neque.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  neque.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  neque.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  neque.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  neque.
                </ListItem>
              </List>
            </Card>
          </Grid> */}
          <Grid item md={12} sm={12} sx={{ mt: '1rem' }}>
           
            <Typography
              variant="h3"
              sx={{ mt: '3rem', textAlign: 'center', fontWeight: 'bold' }}
            >
              {' '}
              أقسام الأسئلة{' '}
            </Typography>
            <Card sx={{ width: '100%', mt: '1rem' }}>
              <Categories />
            </Card>
          </Grid>
        </Grid>
      </main>
    </>
  )
}
