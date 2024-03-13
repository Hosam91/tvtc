import React from 'react'
import { Container, Grid, Link, Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1976d2',
        marginTop: '40px',
        padding: '20px 0',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">المؤسسة</Typography>
          <Typography variant="body2">
            منصة استكشاف القيادات والمتميزين من منسوبي المؤسسة
          </Typography>
          <Link href="#" color="inherit">
            قناة التواصل الداخلي (Yammer)
          </Link>
          <Link href="#" color="inherit">
            الاشتراك في البوابة
          </Link>
          <Link href="#" color="inherit">
            التوظيف
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">منصات</Typography>
          <Link href="#" color="inherit">
            منصة اوفيس 365
          </Link>
          <Link href="#" color="inherit">
            منصة ايثاق
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">السياسات</Typography>
          <Link href="#" color="inherit">
            الخصوصية وحماية البيانات
          </Link>
          <Link href="#" color="inherit">
            سيـاسة الخصوصية
          </Link>
          <Link href="#" color="inherit">
            سياسة حرية المعلومات
          </Link>
          <Link href="#" color="inherit">
            السياسات الأمنية
          </Link>
          <Link href="#" color="inherit">
            اتفاقية مستوى تقديم الخدمة
          </Link>
          <Link href="#" color="inherit">
            إخلاء المسؤولية
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">تواصل معنا</Typography>
          <Link href="#" color="inherit">
            اتصل بنا
          </Link>
          <Link href="#" color="inherit">
            الدعم الفني
          </Link>
          <Link href="#" color="inherit">
            الدعم الفني بلغة الإشارة
          </Link>
          <Link href="#" color="inherit">
            الأسئلة الشائعة
          </Link>
          <Link href="#" color="inherit">
            بلاغ عن فساد ( نزاهة)
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link href="#" color="inherit">
          الرئيسية
        </Link>
        <Link href="#" color="inherit">
          يوتيوب
        </Link>
        <Link href="#" color="inherit">
          تويتر
        </Link>
        <Link href="#" color="inherit">
          انستغرام
        </Link>
        <Link href="#" color="inherit">
          فيسبوك
        </Link>
        <Link href="#" color="inherit">
          لينكد إن
        </Link>
        <Link href="#" color="inherit">
          سناب شات
        </Link>
        <Link href="#" color="inherit">
          qrcode
        </Link>
        <Link href="#" color="inherit">
          apps
        </Link>
        <Link href="#" color="inherit">
          تطبيقات المؤسسة
        </Link>
        <Link href="#" color="inherit">
          W3C CSS3
        </Link>
        <Link href="#" color="inherit">
          W3C HTML5
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        جميع الحقوق محفوظة - المؤسسة العامة للتدريب التقني والمهني (TVTC) ©{' '}
        {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link href="#" color="inherit">
          شروط الإستخدام
        </Link>
        <Link href="#" color="inherit">
          خريطة الموقع
        </Link>
      </Typography>
    </footer>
  )
}

export default Footer
