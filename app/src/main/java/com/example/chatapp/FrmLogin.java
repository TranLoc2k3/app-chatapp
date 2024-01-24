package com.example.chatapp;

import androidx.annotation.NonNull;
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

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class FrmLogin extends AppCompatActivity {

    DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReferenceFromUrl("https://chatapp-3438b-default-rtdb.firebaseio.com/");
    Button btnDangNhap1;
    TextView btnQMK;
    Switch switchhienmk;
    TextView txtPass, txtSdt;

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
                if (isChecked) {
                    txtPass.setInputType(InputType.TYPE_TEXT_VARIATION_VISIBLE_PASSWORD);
                } else {
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
                final String sdt = txtSdt.getText().toString();
                final String enteredPass = txtPass.getText().toString();

                if (sdt.isEmpty() || enteredPass.isEmpty()) {
                    Toast.makeText(FrmLogin.this, "Vui lòng nhập đầy đủ thông tin", Toast.LENGTH_SHORT).show();
                } else if (sdt.length() < 10 || sdt.length() > 11) {
                    Toast.makeText(FrmLogin.this, "Số điện thoại không hợp lệ", Toast.LENGTH_SHORT).show();
                } else {
                    // Kiểm tra sdt và pass trong Firebase Realtime Database
                    databaseReference.child("User").addListenerForSingleValueEvent(new ValueEventListener() {
                        @Override
                        public void onDataChange(@NonNull DataSnapshot snapshot) {
                            if (snapshot != null && snapshot.hasChild(sdt)) {
                                final String getPass = snapshot.child(sdt).child("pass").getValue(String.class);

                                if (getPass != null && getPass.equals(enteredPass)) {
                                    Toast.makeText(FrmLogin.this, "Đăng nhập thành công", Toast.LENGTH_SHORT).show();
                                    Intent intent = new Intent(FrmLogin.this, MainActivity.class);
                                    startActivity(intent);
                                    finish();
                                } else {
                                    Toast.makeText(FrmLogin.this, "Sai mật khẩu", Toast.LENGTH_SHORT).show();
                                }
                            } else {
                                Toast.makeText(FrmLogin.this, "Số điện thoại không tồn tại", Toast.LENGTH_SHORT).show();
                            }
                        }

                        @Override
                        public void onCancelled(@NonNull DatabaseError error) {

                        }
                    });
                }
            }
        });
    }
    }
