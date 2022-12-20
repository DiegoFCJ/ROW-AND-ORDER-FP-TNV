package com.tnv.userManager;

import com.tnv.userManager.model.User;
import com.tnv.userManager.model.UsersRoles;
import com.tnv.userManager.repository.UserRepository;
import jakarta.mail.MessagingException;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UserManagerApplication {

	public static void main(String[] args) throws MessagingException {
		SpringApplication.run(UserManagerApplication.class, args);
	}

	@Bean
	static CommandLineRunner commandLineRunner(UserRepository users) {
		return args -> {
			if(!users.adminAutoCreate(UsersRoles.ADMIN)){
				users.save(new User("admin", UsersRoles.ADMIN));
				users.save(new User("user", UsersRoles.USER));
				users.save(new User("mariane", UsersRoles.USER));
				users.save(new User("tester", UsersRoles.USER));
				users.save(new User("ludo", UsersRoles.USER));
				users.save(new User("bibbi", UsersRoles.USER));
				users.save(new User("pirogi", UsersRoles.USER));
				users.save(new User("papi", UsersRoles.USER));
				users.save(new User("meson", UsersRoles.USER));
				users.save(new User("mery", UsersRoles.USER));
				users.save(new User("leon", UsersRoles.USER));
				users.save(new User("karen", UsersRoles.USER));
				users.save(new User("sellotape", UsersRoles.USER));
			}
		};
	}

}
