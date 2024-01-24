package com.example.chatapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class FrmDangKySDT extends AppCompatActivity {

    DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReferenceFromUrl("https://chatapp-3438b-default-rtdb.firebaseio.com/");
    private ImageButton imgbtnLuiLai;
    private Button btnTiepTuc;
    private EditText editTxtSdt;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_dangkysdt);

        btnTiepTuc = findViewById(R.id.btnTiepTuc);
        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);
        editTxtSdt = findViewById(R.id.editTxtSdt);


        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmDangKySDT.this, FrmDangKyHoTen.class);
                startActivity(intent);
            }
        });

        btnTiepTuc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String sdt = editTxtSdt.getText().toString();
                if (sdt.isEmpty()) {
                    Toast.makeText(FrmDangKySDT.this, "Vui lòng nhập số điện thoại", Toast.LENGTH_SHORT).show();
                } else {
                    databaseReference.child("User").addListenerForSingleValueEvent(new ValueEventListener() {
                        @Override
                        public void onDataChange(@NonNull DataSnapshot snapshot) {
                            if (snapshot.hasChild(sdt)) {
                                Toast.makeText(FrmDangKySDT.this, "Số điện thoại đã tồn tại", Toast.LENGTH_SHORT).show();
                            } else {
                                // Save "sdt" to SharedPreferences
                                SharedPreferences sharedPreferences = getSharedPreferences("dataLogin", MODE_PRIVATE);
                                SharedPreferences.Editor editor = sharedPreferences.edit();
                                editor.putString("sdt", sdt);
                                editor.apply();

                                // Retrieve "hoten" from SharedPreferences
                                String hoten = sharedPreferences.getString("hoten", "");

                                // Chuyển sang FrmDangKyKichHoatTaiKhoan và truyền dữ liệu
                                Intent intent = new Intent(FrmDangKySDT.this, FrmDangKyKichHoatTaiKhoan.class);
                                intent.putExtra("sdt", sdt); // Attach "sdt" as an extra
                                intent.putExtra("hoten", hoten); // Attach "hoten" as an extra
                                startActivity(intent);
                                finish();
                            }
                        }

                        @Override
                        public void onCancelled(@NonNull DatabaseError error) {
                            // Handle onCancelled if needed
                        }
                    });
                }
            }
        });

    }
}