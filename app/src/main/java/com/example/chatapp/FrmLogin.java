package com.example.chatapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.InputType;
import android.view.View;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.ImageButton;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

public class FrmLogin extends AppCompatActivity {

    Button btnDangNhap1;
    TextView btnQMK;
    Switch switchhienmk;
    TextView txtPass , txtSdt;

    ImageButton imgbtnLuiLai;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_login);

        btnDangNhap1 = findViewById(R.id.btnDangNhap1);
        btnQMK = findViewById(R.id.btnQMK);
        switchhienmk = findViewById(R.id.switchhienmk);
        txtPass = findViewById(R.id.txtPass);
        txtSdt = findViewById(R.id.txtSdt);

        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);

        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmLogin.this, FrmManHinhChinh.class);
                startActivity(intent);
            }
        });

        switchhienmk.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(switchhienmk.isChecked()){
                    txtPass.setInputType(InputType.TYPE_TEXT_VARIATION_VISIBLE_PASSWORD);
                }else{
                    txtPass.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
                }
            }
        });


        btnQMK.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmLogin.this, FrmQuenMatKhau.class);
                startActivity(intent);
            }
        });

        btnDangNhap1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                final String sdt = txtSdt.getText().toString();
//                final String pass = txtPass.getText().toString();
//
//                if (sdt.isEmpty() || pass.isEmpty()) {
//                    Toast.makeText(FrmLogin.this, "Vui lòng nhập đầy đủ thông tin", Toast.LENGTH_SHORT).show();
//                }else if (sdt.length() < 10 || sdt.length() > 11) {
//                    Toast.makeText(FrmLogin.this, "Số điện thoại không hợp lệ", Toast.LENGTH_SHORT).show();
//
//                }else {
//
//                    Toast.makeText(FrmLogin.this, "Đăng nhập thành công", Toast.LENGTH_SHORT).show();
//                    Intent intent = new Intent(FrmLogin.this, FrmManHinhChinh.class);
//                    startActivity(intent);
//}
                Intent intent = new Intent(FrmLogin.this, FrmChat.class);
                startActivity(intent);
            }
        });
    }
}

