package com.example.chatapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;

public class FrmMaXacNhan extends AppCompatActivity {

    ImageButton imgbtnLuiLai;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_ma_xac_nhan);

        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);
        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmMaXacNhan.this, FrmQuenMatKhau.class);
                startActivity(intent);
            }
        });
    }
}