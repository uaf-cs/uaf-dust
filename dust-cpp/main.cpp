//Dust program
//Diane Murph May 2018
//Institute of Northern Engineering

#include <iostream>
#include <math.h>
#include <iomanip>
#include <algorithm>

using namespace std;

int main()
{
    //enter data from 0 to 59 seconds
    double s0i, s1i,s2i,s3i,s4i,s5i,s6i, s7i, s8i, s9i, s10i, s11i, s12i, s13i, s14i, s15i, s16i, s17i, s18i, s19i, s20i, s21i, s22i, s23i, s24i, s25i, s26i, s27i, s28i, s29i, s30i, s31i, s32i, s33i, s34i, s35i, s36i, s37i, s38i, s39i, s40i, s41i, s42i, s43i, s44i, s45i, s46i, s47i, s48i, s49i, s50i, s51i, s52i, s53i, s54i, s55i, s56i, s57i, s58i, s59i;
    cout << "Concentrations from 0 to 59 seconds\n";
    cin>>s0i >> s1i >> s2i>>s3i>>s4i>>s5i>>s6i>>s7i>>s8i>>s9i>>s10i>>s11i>>s12i>>s13i>>s14i>>s15i>>s16i>>s17i>>s18i>>s19i>>s20i>>s21i>>s22i>>s23i>>s24i>>s25i>>s26i>>s27i>>s28i>>s29i>>s30i>>s31i>>s32i>>s33i>>s34i>>s35i>>s36i>>s37i>>s38i>>s39i>>s40i>>s41i >> s42i>>s43i>>s44i>>s45i>>s46i>>s47i>>s48i>>s49i>>s50i>>s51i>>s52i>>s53i>>s54i>>s55i>>s56i>>s57i>>s58i>>s59i;
    
    //getting ln for each
    double s0 = log(s0i), s1 = log(s1i), s2 = log(s2i), s3 = log(s3i), s4 = log(s4i), s5 = log(s5i), s6 = log(s6i), s7 = log(s7i), s8 = log(s8i), s9 = log(s9i), s10 = log(s10i), s11 = log(s11i), s12 = log(s12i), s13 = log(s13i), s14 = log(s14i), s15 = log(s15i), s16 = log(s16i), s17 = log(s17i), s18 = log(s18i), s19 = log(s19i), s20 = log(s20i), s21 = log(s21i), s22 = log(s22i), s23 = log(s23i), s24 = log(s24i), s25 = log(s25i), s26 = log(s26i), s27 = log(s27i), s28 = log(s28i), s29 = log(s29i), s30 = log(s30i), s31 = log(s31i), s32 = log(s32i), s33 = log(s33i), s34 = log(s34i), s35 = log(s35i), s36 = log(s36i), s37 = log(s37i), s38 = log(s38i), s39 = log(s39i), s40 = log(s40i), s41 = log(s41i), s42 = log(s42i), s43 = log(s43i), s44 = log(s44i), s45 = log(s45i), s46 = log(s46i), s47 = log(s47i), s48 = log(s48i), s49 = log(s49i), s50 = log(s50i), s51 = log(s51i), s52 = log(s52i), s53 = log(s53i), s54 = log(s54i), s55 = log(s55i), s56 = log(s56i), s57 = log(s57i), s58 = log(s58i), s59 = log(s59i);
    
    //6s
    double avg6 = (s0+s1+s2+s3+s4+s5+s6)/7; //average
    double S_xx6 = 28; //S_xx
    double S_xy6 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6)-21*avg6; //S_xy
    double slope6 = S_xy6/S_xx6; //beta_hat_1
    double y_intercept6 = avg6 - slope6*3; //beta_hat_0
    
    double s6_s0_deriv1 = abs(exp(y_intercept6)*slope6*exp(slope6*0));
    double s6_s6_deriv2 = s6_s0_deriv1*abs(slope6*exp(slope6*6));
    double tau6 = abs(1/slope6);
    //cout<<"tau 6 is "<<setprecision(3)<<tau6<<".\n";
    
    //7s
    double avg7 = (s0+s1+s2+s3+s4+s5+s6+s7)/8; //average
    double S_xx7 = 42; //S_xx
    double S_xy7 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7)-28*avg7; //S_xy
    double slope7 = S_xy7/S_xx7;
    double y_intercept7 = avg7 - slope7*3.5;
    
    double s7_s0_deriv1 = abs(exp(y_intercept7)*slope7*exp(slope7*0));
    double s7_s7_deriv2 = s7_s0_deriv1*abs(slope7*exp(slope7*7));
    
    double tau7 = abs(1/slope7);
    //cout<<"tau 7 is "<<tau7<<".\n";
    
    //8s
    double avg8 = (s0+s1+s2+s3+s4+s5+s6+s7+s8)/9; //average
    double S_xx8 = 60; //S_xx
    double S_xy8 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8)-36*avg8; //S_xy
    double slope8 = S_xy8/S_xx8;
    double y_intercept8 = avg8 - slope8*4.0;
    
    double s8_s0_deriv1 = abs(exp(y_intercept8)*slope8*exp(slope8*0));
    double s8_s8_deriv2 = s8_s0_deriv1*abs(slope8*exp(slope8*8));
    
    double tau8 = abs(1/slope8);
    //cout<<"tau 8 is "<<tau8<<".\n";
    
    //9s
    double avg9 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9)/10; //average
    double S_xx9 = 82.5; //S_xx
    double S_xy9 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9)-45*avg9; //S_xy
    double slope9 = S_xy9/S_xx9;
    double y_intercept9 = avg9 - slope9*4.5;
    
    double s9_s0_deriv1 = abs(exp(y_intercept9)*slope9*exp(slope9*0));
    double s9_s9_deriv2 = s9_s0_deriv1*abs(slope9*exp(slope9*9));
    
    double tau9 = abs(1/slope9);
    //cout<<"tau 9 is "<<tau9<<".\n";

    //10s
    double avg10 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10)/11; //average
    double S_xx10 = 110; //S_xx
    double S_xy10 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10)-55*avg10; //S_xy
    double slope10 = S_xy10/S_xx10;
    double y_intercept10 = avg10 - slope10*5;
    
    double s10_s0_deriv1 = abs(exp(y_intercept10)*slope10*exp(slope10*0));
    double s10_s10_deriv2 = s10_s0_deriv1*abs(slope10*exp(slope10*10));
    
    double tau10 = abs(1/slope10);
    //cout<<"tau 10 is "<<tau10<<".\n";
    
    //11s
    double avg11 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11)/12; //average
    double S_xx11 = 143; //S_xx
    double S_xy11 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11)-66*avg11; //S_xy
    double slope11 = S_xy11/S_xx11;
    double y_intercept11 = avg11 - slope11*5.5;
    
    double s11_s0_deriv1 = abs(exp(y_intercept11)*slope11*exp(slope11*0));
    double s11_s11_deriv2 = s11_s0_deriv1*abs(slope11*exp(slope11*11));
    
    double tau11 = abs(1/slope11);
    //cout<<"tau 11 is "<<tau11<<".\n";
    
    //12s
    double avg12 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12)/13; //average
    double S_xx12 = 182; //S_xx
    double S_xy12 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12)-78*avg12; //S_xy
    double slope12 = S_xy12/S_xx12;
    double y_intercept12 = avg12 - slope12*6;
    double s12_s0_deriv1 = abs(exp(y_intercept12)*slope12*exp(slope12*0));
    double s12_s12_deriv2 = s12_s0_deriv1*abs(slope12*exp(slope12*12));
    double tau12 = abs(1/slope12);
    //cout<<"tau 12 is "<<tau12<<".\n";
    
    //13s
    double avg13 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13)/14; //average
    double S_xx13 = 227.5; //S_xx
    double S_xy13 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13)-91*avg13;
    double slope13 = S_xy13/S_xx13;
    double y_intercept13 = avg13 - slope13*6.5;
    double s13_s0_deriv1 = abs(exp(y_intercept13)*slope13*exp(slope13*0));
    double s13_s13_deriv2 = s13_s0_deriv1*abs(slope13*exp(slope13*13));
    double tau13 = abs(1/slope13);
    //cout<<"tau 13 is "<<tau13<<".\n";
    
    //14s
    double avg14 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14)/15; //average
    double S_xx14 = 280; //S_xx
    double S_xy14 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14)-105*avg14;
    double slope14 = S_xy14/S_xx14;
    double y_intercept14 = avg14 - slope14*7;
    double s14_s0_deriv1 = abs(exp(y_intercept14)*slope14*exp(slope14*0));
    double s14_s14_deriv2 = s14_s0_deriv1*abs(slope14*exp(slope14*14));
    double tau14 = abs(1/slope14);
    //cout<<"tau 14 is "<<tau14<<".\n";
    
    //15s
    double avg15 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15)/16; //average
    double S_xx15 = 340; //S_xx
    double S_xy15 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15)-120*avg15;
    double slope15 = S_xy15/S_xx15;
    double y_intercept15 = avg15 - slope15*7.5;
    double s15_s0_deriv1 = abs(exp(y_intercept15)*slope15*exp(slope15*0));
    double s15_s15_deriv2 = s15_s0_deriv1*abs(slope15*exp(slope15*15));
    double tau15 = abs(1/slope15);
    //cout<<"tau 15 is "<<tau15<<".\n";
   
    //16s
    double avg16 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16)/17; //average
    double S_xx16 = 408; //S_xx
    double S_xy16 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16)-136*avg16;
    double slope16 = S_xy16/S_xx16;
    double y_intercept16 = avg16 - slope16*8;
    double s16_s0_deriv1 = abs(exp(y_intercept16)*slope16*exp(slope16*0));
    double s16_s16_deriv2 = s16_s0_deriv1*abs(slope16*exp(slope16*16));
    double tau16 = abs(1/slope16);
    //cout<<"tau 16 is "<<tau16<<".\n";
    
    //17s
    double avg17 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17)/18; //average
    double S_xx17 = 484.5; //S_xx
    double S_xy17 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17)-153*avg17;
    double slope17 = S_xy17/S_xx17;
    double y_intercept17 = avg17 - slope17*8.5;
    double s17_s0_deriv1 = abs(exp(y_intercept17)*slope17*exp(slope17*0));
    double s17_s17_deriv2 = s17_s0_deriv1*abs(slope17*exp(slope17*17));
    double tau17 = abs(1/slope17);
    //cout<<"tau 17 is "<<tau17<<".\n";
    
    //18s
    double avg18 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18)/19; //average
    double S_xx18 = 570; //S_xx
    double S_xy18 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18)-171*avg18;
    double slope18 = S_xy18/S_xx18;
    double y_intercept18 = avg18 - slope18*9;
    double s18_s0_deriv1 = abs(exp(y_intercept18)*slope18*exp(slope18*0));
    double s18_s18_deriv2 = s18_s0_deriv1*abs(slope18*exp(slope18*18));
    double tau18 = abs(1/slope18);
    //cout<<"tau 18 is "<<tau18<<".\n";
    
    //19s
    double avg19 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19)/20; //average
    double S_xx19 = 665; //S_xx
    double S_xy19 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19)-190*avg19;
    double slope19 = S_xy19/S_xx19;
    double y_intercept19 = avg19 - slope19*9.5;
    double s19_s0_deriv1 = abs(exp(y_intercept19)*slope19*exp(slope19*0));
    double s19_s19_deriv2 = s19_s0_deriv1*abs(slope19*exp(slope19*19));
    double tau19 = abs(1/slope19);
    //cout<<"tau 19 is "<<tau19<<".\n";
    
    //20s
    double avg20 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20)/21;
    double S_xx20 = 770; //S_xx
    double S_xy20 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20)-210*avg20;
    double slope20 = S_xy20/S_xx20;
    double y_intercept20 = avg20 - slope20*10;
    double s20_s0_deriv1 = abs(exp(y_intercept20)*slope20*exp(slope20*0));
    double s20_s20_deriv2 = s20_s0_deriv1*abs(slope20*exp(slope20*20));
    double tau20 = abs(1/slope20);
    //cout<<"tau 20 is "<<tau20<<".\n";
    
    //21s
    double avg21 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21)/22;
    double S_xx21 = 885.5; //S_xx
    double S_xy21 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21)-231*avg21;
    double slope21 = S_xy21/S_xx21;
    double y_intercept21 = avg21 - slope21*10.5;
    double s21_s0_deriv1 = abs(exp(y_intercept21)*slope21*exp(slope21*0));
    double s21_s21_deriv2 = s21_s0_deriv1*abs(slope21*exp(slope21*21));
    double tau21 = abs(1/slope21);
    //cout<<"tau 21 is "<<tau21<<".\n";
    
    //22s
    double avg22 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22)/23;
    double S_xx22 = 1012; //S_xx
    double S_xy22 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22)-253*avg22;
    double slope22 = S_xy22/S_xx22;
    double y_intercept22 = avg22 - slope22*11;
    double s22_s0_deriv1 = abs(exp(y_intercept22)*slope22*exp(slope22*0));
    double s22_s22_deriv2 = s22_s0_deriv1*abs(slope22*exp(slope22*22));
    double tau22 = abs(1/slope22);
    //cout<<"tau 22 is "<<tau22<<".\n";
    
    //23s
    double avg23 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23)/24;
    double S_xx23 = 1150; //S_xx
    double S_xy23 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23)-276*avg23;
    double slope23 = S_xy23/S_xx23;
    double y_intercept23 = avg23 - slope23*11.5;
    double s23_s0_deriv1 = abs(exp(y_intercept23)*slope23*exp(slope23*0));
    double s23_s23_deriv2 = s23_s0_deriv1*abs(slope23*exp(slope23*23));
    double tau23 = abs(1/slope23);
    //cout<<"tau 23 is "<<tau23<<".\n";
    
    //24s
    double avg24 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24)/25;
    double S_xx24 = 1300; //S_xx
    double S_xy24 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24)-300*avg24;
    double slope24 = S_xy24/S_xx24;
    double y_intercept24 = avg24 - slope24*12;
    double s24_s0_deriv1 = abs(exp(y_intercept24)*slope24*exp(slope24*0));
    double s24_s24_deriv2 = s24_s0_deriv1*abs(slope24*exp(slope24*24));
    double tau24 = abs(1/slope24);
    //cout<<"tau 24 is "<<tau24<<".\n";
    
    //25s
    double avg25 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25)/26;
    double S_xx25 = 1462.5;
    double S_xy25 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25)-325*avg25;
    double slope25 = S_xy25/S_xx25;
    double y_intercept25 = avg25 - slope25*12.5;
    double s25_s0_deriv1 = abs(exp(y_intercept25)*slope25*exp(slope25*0));
    double s25_s25_deriv2 = s25_s0_deriv1*abs(slope25*exp(slope25*25));
    double tau25 = abs(1/slope25);
    //cout<<"tau 25 is "<<tau25<<".\n";
    
    //26s
    double avg26 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26)/27;
    double S_xx26 = 1638;
    double S_xy26 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26)-351*avg26;
    double slope26 = S_xy26/S_xx26;
    double y_intercept26 = avg26 - slope26*13;
    double s26_s0_deriv1 = abs(exp(y_intercept26)*slope26*exp(slope26*0));
    double s26_s26_deriv2 = s26_s0_deriv1*abs(slope26*exp(slope26*26));
    double tau26 = abs(1/slope26);
    //cout<<"tau 26 is "<<tau26<<".\n";
    
    //27s
    double avg27 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27)/28;
    double S_xx27 = 1827;
    double S_xy27 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27)-378*avg27;
    double slope27 = S_xy27/S_xx27;
    double y_intercept27 = avg27 - slope27*13.5;
    double s27_s0_deriv1 = abs(exp(y_intercept27)*slope27*exp(slope27*0));
    double s27_s27_deriv2 = s27_s0_deriv1*abs(slope27*exp(slope27*27));
    double tau27 = abs(1/slope27);
    //cout<<"tau 27 is "<<tau27<<".\n";
    
    //28s
    double avg28 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28)/29;
    double S_xx28 = 2030;
    double S_xy28 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28)-406*avg28;
    double slope28 = S_xy28/S_xx28;
    double y_intercept28 = avg28 - slope28*14;
    double s28_s0_deriv1 = abs(exp(y_intercept28)*slope28*exp(slope28*0));
    double s28_s28_deriv2 = s28_s0_deriv1*abs(slope28*exp(slope28*28));
    double tau28 = abs(1/slope28);
    //cout<<"tau 28 is "<<tau28<<".\n";
    
    //29s
    double avg29 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29)/30;
    double S_xx29 = 2247.5;
    double S_xy29 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29)-435*avg29;
    double slope29 = S_xy29/S_xx29;
    double y_intercept29 = avg29 - slope29*14.5;
    double s29_s0_deriv1 = abs(exp(y_intercept29)*slope29*exp(slope29*0));
    double s29_s29_deriv2 = s29_s0_deriv1*abs(slope29*exp(slope29*29));
    double tau29 = abs(1/slope29);
    //cout<<"tau 29 is "<<tau29<<".\n";
    
    //30s
    double avg30 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30)/31;
    double S_xx30 = 2480;
    double S_xy30 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30)-465*avg30;
    double slope30 = S_xy30/S_xx30;
    double y_intercept30 = avg30 - slope30*15;
    double s30_s0_deriv1 = abs(exp(y_intercept30)*slope30*exp(slope30*0));
    double s30_s30_deriv2 = s30_s0_deriv1*abs(slope30*exp(slope30*30));
    double tau30 = abs(1/slope30);
    //cout<<"tau 30 is "<<tau30<<".\n";
    
    //31s
    double avg31 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31)/32;
    double S_xx31 = 2728;
    double S_xy31 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31)-496*avg31;
    double slope31 = S_xy31/S_xx31;
    double y_intercept31 = avg31 - slope31*15.5;
    double s31_s0_deriv1 = abs(exp(y_intercept31)*slope31*exp(slope31*0));
    double s31_s31_deriv2 = s31_s0_deriv1*abs(slope31*exp(slope31*31));
    double tau31 = abs(1/slope31);
    //cout<<"tau 31 is "<<tau31<<".\n";
    
    //32s
    double avg32 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32)/33;
    double S_xx32 = 2992;
    double S_xy32 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32)-528*avg32;
    double slope32 = S_xy32/S_xx32;
    double y_intercept32 = avg32 - slope32*16;
    double s32_s0_deriv1 = abs(exp(y_intercept32)*slope32*exp(slope32*0));
    double s32_s32_deriv2 = s32_s0_deriv1*abs(slope32*exp(slope32*32));
    double tau32 = abs(1/slope32);
    //cout<<"tau 32 is "<<tau32<<".\n";
    
    //33s
    double avg33 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33)/34;
    double S_xx33 = 3272.5;
    double S_xy33 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33)-561*avg33;
    double slope33 = S_xy33/S_xx33;
    double y_intercept33 = avg33 - slope33*16.5;
    double s33_s0_deriv1 = abs(exp(y_intercept33)*slope33*exp(slope33*0));
    double s33_s33_deriv2 = s33_s0_deriv1*abs(slope33*exp(slope33*33));
    double tau33 = abs(1/slope33);
    //cout<<"tau 33 is "<<tau33<<".\n";
    
    //34s
    double avg34 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34)/35;
    double S_xx34 = 3570;
    double S_xy34 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34)-595*avg34;
    double slope34 = S_xy34/S_xx34;
    double y_intercept34 = avg34 - slope34*17;
    double s34_s0_deriv1 = abs(exp(y_intercept34)*slope34*exp(slope34*0));
    double s34_s34_deriv2 = s34_s0_deriv1*abs(slope34*exp(slope34*34));
    double tau34 = abs(1/slope34);
    //cout<<"tau 34 is "<<tau34<<".\n";
    
    //35s
    double avg35 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35)/36;
    double S_xx35 = 3885;
    double S_xy35 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35)-630*avg35;
    double slope35 = S_xy35/S_xx35;
    double y_intercept35 = avg35 - slope35*17.5;
    double s35_s0_deriv1 = abs(exp(y_intercept35)*slope35*exp(slope35*0));
    double s35_s35_deriv2 = s35_s0_deriv1*abs(slope35*exp(slope35*35));
    double tau35 = abs(1/slope35);
    //cout<<"tau 35 is "<<tau35<<".\n";
    
    //36s
    double avg36 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36)/37;
    double S_xx36 = 4218;
    double S_xy36 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36)-666*avg36;
    double slope36 = S_xy36/S_xx36;
    double y_intercept36 = avg36 - slope36*18;
    double s36_s0_deriv1 = abs(exp(y_intercept36)*slope36*exp(slope36*0));
    double s36_s36_deriv2 = s36_s0_deriv1*abs(slope36*exp(slope36*36));
    double tau36 = abs(1/slope36);
    //cout<<"tau 36 is "<<tau36<<".\n";
    
    //37s
    double avg37 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37)/38;
    double S_xx37 = 4569.5;
    double S_xy37 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37)-703*avg37;
    double slope37 = S_xy37/S_xx37;
    double y_intercept37 = avg37 - slope37*18.5;
    double s37_s0_deriv1 = abs(exp(y_intercept37)*slope37*exp(slope37*0));
    double s37_s37_deriv2 = s37_s0_deriv1*abs(slope37*exp(slope37*37));
    double tau37 = abs(1/slope37);
    //cout<<"tau 37 is "<<tau37<<".\n";
    
    //38s
    double avg38 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38)/39;
    double S_xx38 = 4940;
    double S_xy38 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38)-741*avg38;
    double slope38 = S_xy38/S_xx38;
    double y_intercept38 = avg38 - slope38*19;
    double s38_s0_deriv1 = abs(exp(y_intercept38)*slope38*exp(slope38*0));
    double s38_s38_deriv2 = s38_s0_deriv1*abs(slope38*exp(slope38*38));
    double tau38 = abs(1/slope38);
    //cout<<"tau 38 is "<<tau38<<".\n";
    
    //39s
    double avg39 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39)/40;
    double S_xx39 = 5330;
    double S_xy39 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39)-780*avg39;
    double slope39 = S_xy39/S_xx39;
    double y_intercept39 = avg39 - slope39*19.5;
    double s39_s0_deriv1 = abs(exp(y_intercept39)*slope39*exp(slope39*0));
    double s39_s39_deriv2 = s39_s0_deriv1*abs(slope39*exp(slope39*39));
    double tau39 = abs(1/slope39);
    //cout<<"tau 39 is "<<tau39<<".\n";
    
    //40s
    double avg40 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40)/41;
    double S_xx40 = 5740;
    double S_xy40 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40)-820*avg40;
    double slope40 = S_xy40/S_xx40;
    double y_intercept40 = avg40 - slope40*20;
    double s40_s0_deriv1 = abs(exp(y_intercept40)*slope40*exp(slope40*0));
    double s40_s40_deriv2 = s40_s0_deriv1*abs(slope40*exp(slope40*40));
    double tau40 = abs(1/slope40);
    //cout<<"tau 40 is "<<tau40<<".\n";
    
    //41s
    double avg41 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41)/42;
    double S_xx41 = 6170.5;
    double S_xy41 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41)-861*avg41;
    double slope41 = S_xy41/S_xx41;
    double y_intercept41 = avg41 - slope41*20.5;
    double s41_s0_deriv1 = abs(exp(y_intercept41)*slope41*exp(slope41*0));
    double s41_s41_deriv2 = s41_s0_deriv1*abs(slope41*exp(slope41*41));
    double tau41 = abs(1/slope41);
    //cout<<"tau 41 is "<<tau41<<".\n";
    
    //42s
    double avg42 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42)/43;
    double S_xx42 = 6622;
    double S_xy42 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42)-903*avg42;
    double slope42 = S_xy42/S_xx42;
    double y_intercept42 = avg42 - slope42*21;
    double s42_s0_deriv1 = abs(exp(y_intercept42)*slope42*exp(slope42*0));
    double s42_s42_deriv2 = s42_s0_deriv1*abs(slope42*exp(slope42*42));
    double tau42 = abs(1/slope42);
    //cout<<"tau 42 is "<<tau42<<".\n";
    
    //43s
    double avg43 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43)/44;
    double S_xx43 = 7095;
    double S_xy43 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43)-946*avg43;
    double slope43 = S_xy43/S_xx43;
    double y_intercept43 = avg43 - slope43*21.5;
    double s43_s0_deriv1 = abs(exp(y_intercept43)*slope43*exp(slope43*0));
    double s43_s43_deriv2 = s43_s0_deriv1*abs(slope43*exp(slope43*43));
    double tau43 = abs(1/slope43);
    //cout<<"tau 43 is "<<tau43<<".\n";
    
    //44s
    double avg44 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44)/45;
    double S_xx44 = 7590;
    double S_xy44 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44)-990*avg44;
    double slope44 = S_xy44/S_xx44;
    double y_intercept44 = avg44 - slope44*22;
    double s44_s0_deriv1 = abs(exp(y_intercept44)*slope44*exp(slope44*0));
    double s44_s44_deriv2 = s44_s0_deriv1*abs(slope44*exp(slope44*44));
    double tau44 = abs(1/slope44);
    //cout<<"tau 44 is "<<tau44<<".\n";
    
    //45s
    double avg45 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45)/46;
    double S_xx45 = 8107.5;
    double S_xy45 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45)-1035*avg45;
    double slope45 = S_xy45/S_xx45;
    double y_intercept45 = avg45 - slope45*22.5;
    double s45_s0_deriv1 = abs(exp(y_intercept45)*slope45*exp(slope45*0));
    double s45_s45_deriv2 = s45_s0_deriv1*abs(slope45*exp(slope45*45));
    double tau45 = abs(1/slope45);
    //cout<<"tau 45 is "<<tau45<<".\n";
    
    //46s
    double avg46 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46)/47;
    double S_xx46 = 8648;
    double S_xy46 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46)-1081*avg46;
    double slope46 = S_xy46/S_xx46;
    double y_intercept46 = avg46 - slope46*23;
    double s46_s0_deriv1 = abs(exp(y_intercept46)*slope46*exp(slope46*0));
    double s46_s46_deriv2 = s46_s0_deriv1*abs(slope46*exp(slope46*46));
    double tau46 = abs(1/slope46);
    //cout<<"tau 46 is "<<tau46<<".\n";
    
    //47s
    double avg47 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47)/48;
    double S_xx47 = 9212;
    double S_xy47 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47)-1128*avg47;
    double slope47 = S_xy47/S_xx47;
    double y_intercept47 = avg47 - slope47*23.5;
    double s47_s0_deriv1 = abs(exp(y_intercept47)*slope47*exp(slope47*0));
    double s47_s47_deriv2 = s47_s0_deriv1*abs(slope47*exp(slope47*47));
    double tau47 = abs(1/slope47);
    //cout<<"tau 47 is "<<tau47<<".\n";
    
    //48s
    double avg48 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48)/49;
    double S_xx48 = 9800;
    double S_xy48 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48)-1176*avg48;
    double slope48 = S_xy48/S_xx48;
    double y_intercept48 = avg48 - slope48*24;
    double s48_s0_deriv1 = abs(exp(y_intercept48)*slope48*exp(slope48*0));
    double s48_s48_deriv2 = s48_s0_deriv1*abs(slope48*exp(slope48*48));
    double tau48 = abs(1/slope48);
    //cout<<"tau 48 is "<<tau48<<".\n";
    
    //49s
    double avg49 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49)/50;
    double S_xx49 = 10412.5;
    double S_xy49 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49)-1225*avg49;
    double slope49 = S_xy49/S_xx49;
    double y_intercept49 = avg49 - slope49*24.5;
    double s49_s0_deriv1 = abs(exp(y_intercept49)*slope49*exp(slope49*0));
    double s49_s49_deriv2 = s49_s0_deriv1*abs(slope49*exp(slope49*49));
    double tau49 = abs(1/slope49);
    //cout<<"tau 49 is "<<tau49<<".\n";
    
    //50s
    double avg50 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50)/51;
    double S_xx50 = 11050;
    double S_xy50 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50)-1275*avg50;
    double slope50 = S_xy50/S_xx50;
    double y_intercept50 = avg50 - slope50*25;
    double s50_s0_deriv1 = abs(exp(y_intercept50)*slope50*exp(slope50*0));
    double s50_s50_deriv2 = s50_s0_deriv1*abs(slope50*exp(slope50*50));
    double tau50 = abs(1/slope50);
    //cout<<"tau 50 is "<<setprecision(3)<<tau50<<".\n";
    
    //51s
    double avg51 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51)/52;
    double S_xx51 = 11713;
    double S_xy51 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51)-1326*avg51;
    double slope51 = S_xy51/S_xx51;
    double y_intercept51 = avg51 - slope51*25.5;
    double s51_s0_deriv1 = abs(exp(y_intercept51)*slope51*exp(slope51*0));
    double s51_s51_deriv2 = s51_s0_deriv1*abs(slope51*exp(slope51*51));
    double tau51 = abs(1/slope51);
    //cout<<"tau 51 is "<<tau51<<".\n";
    
    //52s
    double avg52 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51+s52)/53;
    double S_xx52 = 12402;
    double S_xy52 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51+s52*52)-1378*avg52;
    double slope52 = S_xy52/S_xx52;
    double y_intercept52 = avg52 - slope52*26;
    double s52_s0_deriv1 = abs(exp(y_intercept52)*slope52*exp(slope52*0));
    double s52_s52_deriv2 = s52_s0_deriv1*abs(slope52*exp(slope52*52));
    double tau52 = abs(1/slope52);
    //cout<<"tau 52 is "<<tau52<<".\n";
    
    //53s
    double avg53 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51+s52+s53)/54;
    double S_xx53 = 13117.5;
    double S_xy53 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51+s52*52+s53*53)-1431*avg53;
    double slope53 = S_xy53/S_xx53;
    double y_intercept53 = avg53 - slope53*26.5;
    double s53_s0_deriv1 = abs(exp(y_intercept53)*slope53*exp(slope53*0));
    double s53_s53_deriv2 = s53_s0_deriv1*abs(slope53*exp(slope53*53));
    double tau53 = abs(1/slope53);
    //cout<<"tau 53 is "<<tau53<<".\n";
    
    //54s
    double avg54 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51+s52+s53+s54)/55;
    double S_xx54 = 13860;
    double S_xy54 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51+s52*52+s53*53+s54*54)-1485*avg54;
    double slope54 = S_xy54/S_xx54;
    double y_intercept54 = avg54 - slope54*27;
    double s54_s0_deriv1 = abs(exp(y_intercept54)*slope54*exp(slope54*0));
    double s54_s54_deriv2 = s54_s0_deriv1*abs(slope54*exp(slope54*54));
    double tau54 = abs(1/slope54);
    //cout<<"tau 54 is "<<tau54<<".\n";
    
    //55s
    double avg55 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51+s52+s53+s54+s55)/56;
    double S_xx55 = 14630;
    double S_xy55 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51+s52*52+s53*53+s54*54+s55*55)-1540*avg55;
    double slope55 = S_xy55/S_xx55;
    double y_intercept55 = avg55 - slope55*27.5;
    double s55_s0_deriv1 = abs(exp(y_intercept55)*slope55*exp(slope55*0));
    double s55_s55_deriv2 = s55_s0_deriv1*abs(slope55*exp(slope55*55));
    double tau55 = abs(1/slope55);
    //cout<<"tau 55 is "<<tau55<<".\n";
    
    //56s
    double avg56 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51+s52+s53+s54+s55+s56)/57;
    double S_xx56 = 15428;
    double S_xy56 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51+s52*52+s53*53+s54*54+s55*55+s56*56)-1596*avg56;
    double slope56 = S_xy56/S_xx56;
    double y_intercept56 = avg56 - slope56*28;
    double s56_s0_deriv1 = abs(exp(y_intercept56)*slope56*exp(slope56*0));
    double s56_s56_deriv2 = s56_s0_deriv1*abs(slope56*exp(slope56*56));
    double tau56 = abs(1/slope56);
    //cout<<"tau 56 is "<<tau56<<".\n";
    
   //57s
    double avg57 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51+s52+s53+s54+s55+s56+s57)/58;
    double S_xx57 = 16254.5;
    double S_xy57 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51+s52*52+s53*53+s54*54+s55*55+s56*56+s57*57)-1653*avg57;
    double slope57 = S_xy57/S_xx57;
    double y_intercept57 = avg57 - slope57*28.5;
    double s57_s0_deriv1 = abs(exp(y_intercept57)*slope57*exp(slope57*0));
    double s57_s57_deriv2 = s57_s0_deriv1*abs(slope57*exp(slope57*57));
    double tau57 = abs(1/slope57);
    //cout<<"tau 57 is "<<tau57<<".\n";
    
    //58s
    double avg58 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51+s52+s53+s54+s55+s56+s57+s58)/59;
    double S_xx58 = 17110;
    double S_xy58 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51+s52*52+s53*53+s54*54+s55*55+s56*56+s57*57+s58*58)-1711*avg58;
    double slope58 = S_xy58/S_xx58;
    double y_intercept58 = avg58 - slope58*29;
    double s58_s0_deriv1 = abs(exp(y_intercept58)*slope58*exp(slope58*0));
    double s58_s58_deriv2 = s58_s0_deriv1*abs(slope58*exp(slope58*58));
    double tau58 = abs(1/slope58);
    //cout<<"tau 58 is "<<tau58<<".\n";
    
    //59s
    double avg59 = (s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15+s16+s17+s18+s19+s20+s21+s22+s23+s24+s25+s26+s27+s28+s29+s30+s31+s32+s33+s34+s35+s36+s37+s38+s39+s40+s41+s42+s43+s44+s45+s46+s47+s48+s49+s50+s51+s52+s53+s54+s55+s56+s57+s58+s59)/60;
    double S_xx59 = 17995;
    double S_xy59 = (0*s0+1*s1+2*s2+3*s3+4*s4+5*s5+6*s6+7*s7+8*s8+9*s9+10*s10+11*s11+12*s12+13*s13+s14*14+s15*15+s16*16+s17*17+s18*18+19*s19+20*s20+21*s21+22*s22+23*s23+24*s24+25*s25+s26*26+s27*27+s28*28+s29*29+s30*30+s31*31+s32*32+s33*33+s34*34+s35*35+s36*36+s37*37+s38*38+s39*39+40*s40+41*s41+42*s42+43*s43+44*s44+45*s45+46*s46+47*s47+48*s48+49*s49+50*s50+51*s51+s52*52+s53*53+s54*54+s55*55+s56*56+s57*57+s58*58+s59*59)-1770*avg59;
    double slope59 = S_xy59/S_xx59;
    double y_intercept59 = avg59 - slope59*29.5;
    double s59_s0_deriv1 = abs(exp(y_intercept59)*slope59*exp(slope59*0));
    double s59_s59_deriv2 = s59_s0_deriv1*abs(slope59*exp(slope59*59));
    double tau59 = abs(1/slope59);
    //cout<<"tau 59 is "<<tau59<<".\n";
    
    //Mean particle residence time (mprt)
    double mprt, time;
    if       (s6_s6_deriv2 < 0.001) {mprt = tau6; time = 6;}
    else{ if (s7_s7_deriv2 < 0.001) {mprt = tau7; time = 7;}
    else{ if (s8_s8_deriv2 < 0.001) {mprt = tau8; time = 8;}
    else{ if (s9_s9_deriv2 < 0.001) {mprt = tau9; time = 9;}
    else{ if (s10_s10_deriv2<0.001) {mprt= tau10; time= 10;}
    else{ if (s11_s11_deriv2<0.001) {mprt = tau11; time = 11;}
    else{ if (s12_s12_deriv2<0.001) {mprt = tau12; time = 12;}
    else{ if (s13_s13_deriv2<0.001) {mprt = tau13; time = 13;}
    else{ if (s14_s14_deriv2<0.001) {mprt = tau14; time = 14;}
    else{ if (s15_s15_deriv2<0.001) {mprt = tau15; time = 15;}
    else{ if (s16_s16_deriv2<0.001) {mprt = tau16; time = 16;}
    else{ if (s17_s17_deriv2<0.001) {mprt = tau17; time = 17;}
    else{ if (s18_s18_deriv2<0.001) {mprt = tau18; time = 18;}
    else{ if (s19_s19_deriv2<0.001) {mprt = tau19; time = 19;}
    else{ if (s20_s20_deriv2<0.001) {mprt = tau20; time = 20;}
    else{ if (s21_s21_deriv2<0.001) {mprt = tau21; time = 21;}
    else{ if (s22_s22_deriv2<0.001) {mprt = tau22; time = 22;}
    else{ if (s23_s23_deriv2<0.001) {mprt = tau23; time = 23;}
    else{ if (s24_s24_deriv2<0.001) {mprt = tau24; time = 24;}
    else{ if (s25_s25_deriv2<0.001) {mprt = tau25; time = 25;}
    else{ if (s26_s26_deriv2<0.001) {mprt = tau26; time = 26;}
    else{ if (s27_s27_deriv2<0.001) {mprt = tau27; time = 27;}
    else{ if (s28_s28_deriv2<0.001) {mprt = tau28; time = 28;}
    else{ if (s29_s29_deriv2<0.001) {mprt = tau29; time = 29;}
    else{ if (s30_s30_deriv2<0.001) {mprt = tau30; time = 30;}
    else{ if (s31_s31_deriv2<0.001) {mprt = tau31; time = 31;}
    else{ if (s32_s32_deriv2<0.001) {mprt = tau32; time = 32;}
    else{ if (s33_s33_deriv2<0.001) {mprt = tau33; time = 33;}
    else{ if (s34_s34_deriv2<0.001) {mprt = tau34; time = 34;}
    else{ if (s35_s35_deriv2<0.001) {mprt = tau35; time = 35;}
    else{ if (s36_s36_deriv2<0.001) {mprt = tau36; time = 36;}
    else{ if (s37_s37_deriv2<0.001) {mprt = tau37; time = 37;}
    else{ if (s38_s38_deriv2<0.001) {mprt = tau38; time = 38;}
    else{ if (s39_s39_deriv2<0.001) {mprt = tau39; time = 39;}
    else{ if (s40_s40_deriv2<0.001) {mprt = tau40; time = 40;}
    else{ if (s41_s41_deriv2<0.001) {mprt = tau41; time = 41;}
    else{ if (s42_s42_deriv2<0.001) {mprt = tau42; time = 42;}
    else{ if (s43_s43_deriv2<0.001) {mprt = tau43; time = 43;}
    else{ if (s44_s44_deriv2<0.001) {mprt = tau44; time = 44;}
    else{ if (s45_s45_deriv2<0.001) {mprt = tau45; time = 45;}
    else{ if (s46_s46_deriv2<0.001) {mprt = tau46; time = 46;}
    else{ if (s47_s47_deriv2<0.001) {mprt = tau47; time = 47;}
    else{ if (s48_s48_deriv2<0.001) {mprt = tau48; time = 48;}
    else{ if (s49_s49_deriv2<0.001) {mprt = tau49; time = 49;}
    else{ if (s50_s50_deriv2<0.001) {mprt = tau50; time = 50;}
    else{ if (s51_s51_deriv2<0.001) {mprt = tau51; time = 51;}
    else{ if (s52_s52_deriv2<0.001) {mprt = tau52; time = 52;}
    else{ if (s53_s53_deriv2<0.001) {mprt = tau53; time = 53;}
    else{ if (s54_s54_deriv2<0.001) {mprt = tau54; time = 54;}
    else{ if (s55_s55_deriv2<0.001) {mprt = tau55; time = 55;}
    else{ if (s56_s56_deriv2<0.001) {mprt = tau56; time = 56;}
    else{ if (s57_s57_deriv2<0.001) {mprt = tau57; time = 57;}
    else{ if (s58_s58_deriv2<0.001) {mprt = tau58; time = 58;}
    else{ if (s59_s59_deriv2<0.001) {mprt = tau59; time = 59;}
    }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
    cout<<"Mean particle residence time is "<<setprecision(3)<<mprt<<" seconds at "<<time<<" seconds.\n";
    if (mprt <= 6)
        cout<<"PASS\n\n";
    else {
        cout <<"FAIL\n\n";
    }
    return 0;
}
