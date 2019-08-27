package entities;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 1). Start by cloning our suggested startcode for projects that requires JPA
 * and JAX-RS
 *
 * 2) Create a local database for this exercise and change persistence.xml to
 * point to this database.
 *
 * 3) Refactor (don't just rename) the entity class RenameMe.java into
 * BankCustomer.java
 *
 * 4) Add the following fields (keep the existing id) to the BankCustomer Entity
 * Class: String firstName String lastName String accountNumber double balance;
 * int customerRanking String internalInfo
 *
 * @author Malte
 */
@Entity
public class BankCustomer implements Serializable {

    // FIELDS
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String accountNumber;
    private double balance;
    private int customerRanking; // Only used internally
    private String internalInfo; // Only used internally

    // EMPTY DEFAULT CONSTRUCTOR
    public BankCustomer() {
    }

    public BankCustomer(String firstName, String lastName, String accountNumber, double balance, int customerRanking, String internalInfo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.customerRanking = customerRanking;
        this.internalInfo = internalInfo;
    }

    /**
     * Get the value of internalInfo
     *
     * @return the value of internalInfo
     */
    public String getInternalInfo() {
        return internalInfo;
    }

    /**
     * Set the value of internalInfo
     *
     * @param internalInfo new value of internalInfo
     */
    public void setInternalInfo(String internalInfo) {
        this.internalInfo = internalInfo;
    }

    /**
     * Get the value of customerRanking
     *
     * @return the value of customerRanking
     */
    public int getCustomerRanking() {
        return customerRanking;
    }

    /**
     * Set the value of customerRanking
     *
     * @param customerRanking new value of customerRanking
     */
    public void setCustomerRanking(int customerRanking) {
        this.customerRanking = customerRanking;
    }

    /**
     * Get the value of balance
     *
     * @return the value of balance
     */
    public double getBalance() {
        return balance;
    }

    /**
     * Set the value of balance
     *
     * @param balance new value of balance
     */
    public void setBalance(double balance) {
        this.balance = balance;
    }

    /**
     * Get the value of accountNumber
     *
     * @return the value of accountNumber
     */
    public String getAccountNumber() {
        return accountNumber;
    }

    /**
     * Set the value of accountNumber
     *
     * @param accountNumber new value of accountNumber
     */
    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    /**
     * Get the value of lastName
     *
     * @return the value of lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Set the value of lastName
     *
     * @param lastName new value of lastName
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * Get the value of firstName
     *
     * @return the value of firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Set the value of firstName
     *
     * @param firstName new value of firstName
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + Objects.hashCode(this.firstName);
        hash = 97 * hash + Objects.hashCode(this.lastName);
        hash = 97 * hash + Objects.hashCode(this.accountNumber);
        hash = 97 * hash + (int) (Double.doubleToLongBits(this.balance) ^ (Double.doubleToLongBits(this.balance) >>> 32));
        hash = 97 * hash + this.customerRanking;
        hash = 97 * hash + Objects.hashCode(this.internalInfo);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final BankCustomer other = (BankCustomer) obj;
        if (Double.doubleToLongBits(this.balance) != Double.doubleToLongBits(other.balance)) {
            return false;
        }
        if (this.customerRanking != other.customerRanking) {
            return false;
        }
        if (!Objects.equals(this.firstName, other.firstName)) {
            return false;
        }
        if (!Objects.equals(this.lastName, other.lastName)) {
            return false;
        }
        if (!Objects.equals(this.accountNumber, other.accountNumber)) {
            return false;
        }
        if (!Objects.equals(this.internalInfo, other.internalInfo)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "BankCustomer{" + "id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", accountNumber=" + accountNumber + ", balance=" + balance + ", customerRanking=" + customerRanking + ", internalInfo=" + internalInfo + '}';
    }

}
