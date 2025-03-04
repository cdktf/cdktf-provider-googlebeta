# `googleBillingBudget` Submodule <a name="`googleBillingBudget` Submodule" id="@cdktf/provider-google-beta.googleBillingBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBillingBudget <a name="GoogleBillingBudget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget google_billing_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudget;

GoogleBillingBudget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .amount(GoogleBillingBudgetAmount)
    .billingAccount(java.lang.String)
//  .allUpdatesRule(GoogleBillingBudgetAllUpdatesRule)
//  .budgetFilter(GoogleBillingBudgetBudgetFilter)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ownershipScope(java.lang.String)
//  .thresholdRules(IResolvable)
//  .thresholdRules(java.util.List<GoogleBillingBudgetThresholdRules>)
//  .timeouts(GoogleBillingBudgetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.amount">amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.allUpdatesRule">allUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.budgetFilter">budgetFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.ownershipScope">ownershipScope</a></code> | <code>java.lang.String</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.thresholdRules">thresholdRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>></code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.amount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#amount GoogleBillingBudget#amount}

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.billingAccount"></a>

- *Type:* java.lang.String

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#billing_account GoogleBillingBudget#billing_account}

---

##### `allUpdatesRule`<sup>Optional</sup> <a name="allUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.allUpdatesRule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#all_updates_rule GoogleBillingBudget#all_updates_rule}

---

##### `budgetFilter`<sup>Optional</sup> <a name="budgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.budgetFilter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#budget_filter GoogleBillingBudget#budget_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#display_name GoogleBillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownershipScope`<sup>Optional</sup> <a name="ownershipScope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.ownershipScope"></a>

- *Type:* java.lang.String

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#ownership_scope GoogleBillingBudget#ownership_scope}

---

##### `thresholdRules`<sup>Optional</sup> <a name="thresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.thresholdRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>>

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#threshold_rules GoogleBillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#timeouts GoogleBillingBudget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule">putAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount">putAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter">putBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules">putThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetAllUpdatesRule">resetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetBudgetFilter">resetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOwnershipScope">resetOwnershipScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetThresholdRules">resetThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllUpdatesRule` <a name="putAllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule"></a>

```java
public void putAllUpdatesRule(GoogleBillingBudgetAllUpdatesRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

---

##### `putAmount` <a name="putAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount"></a>

```java
public void putAmount(GoogleBillingBudgetAmount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

---

##### `putBudgetFilter` <a name="putBudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter"></a>

```java
public void putBudgetFilter(GoogleBillingBudgetBudgetFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

---

##### `putThresholdRules` <a name="putThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules"></a>

```java
public void putThresholdRules(IResolvable OR java.util.List<GoogleBillingBudgetThresholdRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts"></a>

```java
public void putTimeouts(GoogleBillingBudgetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

---

##### `resetAllUpdatesRule` <a name="resetAllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetAllUpdatesRule"></a>

```java
public void resetAllUpdatesRule()
```

##### `resetBudgetFilter` <a name="resetBudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetBudgetFilter"></a>

```java
public void resetBudgetFilter()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetId"></a>

```java
public void resetId()
```

##### `resetOwnershipScope` <a name="resetOwnershipScope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOwnershipScope"></a>

```java
public void resetOwnershipScope()
```

##### `resetThresholdRules` <a name="resetThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetThresholdRules"></a>

```java
public void resetThresholdRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBillingBudget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudget;

GoogleBillingBudget.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudget;

GoogleBillingBudget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudget;

GoogleBillingBudget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudget;

GoogleBillingBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBillingBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBillingBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBillingBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBillingBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBillingBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRule">allUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference">GoogleBillingBudgetAllUpdatesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference">GoogleBillingBudgetAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilter">budgetFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference">GoogleBillingBudgetBudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRules">thresholdRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList">GoogleBillingBudgetThresholdRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference">GoogleBillingBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRuleInput">allUpdatesRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amountInput">amountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccountInput">billingAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilterInput">budgetFilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScopeInput">ownershipScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRulesInput">thresholdRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScope">ownershipScope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allUpdatesRule`<sup>Required</sup> <a name="allUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRule"></a>

```java
public GoogleBillingBudgetAllUpdatesRuleOutputReference getAllUpdatesRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference">GoogleBillingBudgetAllUpdatesRuleOutputReference</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amount"></a>

```java
public GoogleBillingBudgetAmountOutputReference getAmount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference">GoogleBillingBudgetAmountOutputReference</a>

---

##### `budgetFilter`<sup>Required</sup> <a name="budgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilter"></a>

```java
public GoogleBillingBudgetBudgetFilterOutputReference getBudgetFilter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference">GoogleBillingBudgetBudgetFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `thresholdRules`<sup>Required</sup> <a name="thresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRules"></a>

```java
public GoogleBillingBudgetThresholdRulesList getThresholdRules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList">GoogleBillingBudgetThresholdRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeouts"></a>

```java
public GoogleBillingBudgetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference">GoogleBillingBudgetTimeoutsOutputReference</a>

---

##### `allUpdatesRuleInput`<sup>Optional</sup> <a name="allUpdatesRuleInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRuleInput"></a>

```java
public GoogleBillingBudgetAllUpdatesRule getAllUpdatesRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amountInput"></a>

```java
public GoogleBillingBudgetAmount getAmountInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccountInput"></a>

```java
public java.lang.String getBillingAccountInput();
```

- *Type:* java.lang.String

---

##### `budgetFilterInput`<sup>Optional</sup> <a name="budgetFilterInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilterInput"></a>

```java
public GoogleBillingBudgetBudgetFilter getBudgetFilterInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ownershipScopeInput`<sup>Optional</sup> <a name="ownershipScopeInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScopeInput"></a>

```java
public java.lang.String getOwnershipScopeInput();
```

- *Type:* java.lang.String

---

##### `thresholdRulesInput`<sup>Optional</sup> <a name="thresholdRulesInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRulesInput"></a>

```java
public java.lang.Object getThresholdRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccount"></a>

```java
public java.lang.String getBillingAccount();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownershipScope`<sup>Required</sup> <a name="ownershipScope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScope"></a>

```java
public java.lang.String getOwnershipScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBillingBudgetAllUpdatesRule <a name="GoogleBillingBudgetAllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetAllUpdatesRule;

GoogleBillingBudgetAllUpdatesRule.builder()
//  .disableDefaultIamRecipients(java.lang.Boolean)
//  .disableDefaultIamRecipients(IResolvable)
//  .enableProjectLevelRecipients(java.lang.Boolean)
//  .enableProjectLevelRecipients(IResolvable)
//  .monitoringNotificationChannels(java.util.List<java.lang.String>)
//  .pubsubTopic(java.lang.String)
//  .schemaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients">disableDefaultIamRecipients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients">enableProjectLevelRecipients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.monitoringNotificationChannels">monitoringNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.schemaVersion">schemaVersion</a></code> | <code>java.lang.String</code> | The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format. |

---

##### `disableDefaultIamRecipients`<sup>Optional</sup> <a name="disableDefaultIamRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients"></a>

```java
public java.lang.Object getDisableDefaultIamRecipients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#disable_default_iam_recipients GoogleBillingBudget#disable_default_iam_recipients}

---

##### `enableProjectLevelRecipients`<sup>Optional</sup> <a name="enableProjectLevelRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients"></a>

```java
public java.lang.Object getEnableProjectLevelRecipients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with Owner role on a cloud project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#enable_project_level_recipients GoogleBillingBudget#enable_project_level_recipients}

---

##### `monitoringNotificationChannels`<sup>Optional</sup> <a name="monitoringNotificationChannels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.monitoringNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getMonitoringNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#monitoring_notification_channels GoogleBillingBudget#monitoring_notification_channels}

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#pubsub_topic GoogleBillingBudget#pubsub_topic}

---

##### `schemaVersion`<sup>Optional</sup> <a name="schemaVersion" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.schemaVersion"></a>

```java
public java.lang.String getSchemaVersion();
```

- *Type:* java.lang.String

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#schema_version GoogleBillingBudget#schema_version}

---

### GoogleBillingBudgetAmount <a name="GoogleBillingBudgetAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetAmount;

GoogleBillingBudgetAmount.builder()
//  .lastPeriodAmount(java.lang.Boolean)
//  .lastPeriodAmount(IResolvable)
//  .specifiedAmount(GoogleBillingBudgetAmountSpecifiedAmount)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.lastPeriodAmount">lastPeriodAmount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configures a budget amount that is automatically set to 100% of last period's spend. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.specifiedAmount">specifiedAmount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | specified_amount block. |

---

##### `lastPeriodAmount`<sup>Optional</sup> <a name="lastPeriodAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.lastPeriodAmount"></a>

```java
public java.lang.Object getLastPeriodAmount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#last_period_amount GoogleBillingBudget#last_period_amount}

---

##### `specifiedAmount`<sup>Optional</sup> <a name="specifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.specifiedAmount"></a>

```java
public GoogleBillingBudgetAmountSpecifiedAmount getSpecifiedAmount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#specified_amount GoogleBillingBudget#specified_amount}

---

### GoogleBillingBudgetAmountSpecifiedAmount <a name="GoogleBillingBudgetAmountSpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetAmountSpecifiedAmount;

GoogleBillingBudgetAmountSpecifiedAmount.builder()
//  .currencyCode(java.lang.String)
//  .nanos(java.lang.Number)
//  .units(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | The 3-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Number of nano (10^-9) units of the amount. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.units">units</a></code> | <code>java.lang.String</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `currencyCode`<sup>Optional</sup> <a name="currencyCode" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#currency_code GoogleBillingBudget#currency_code}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#nanos GoogleBillingBudget#nanos}

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#units GoogleBillingBudget#units}

---

### GoogleBillingBudgetBudgetFilter <a name="GoogleBillingBudgetBudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetBudgetFilter;

GoogleBillingBudgetBudgetFilter.builder()
//  .calendarPeriod(java.lang.String)
//  .creditTypes(java.util.List<java.lang.String>)
//  .creditTypesTreatment(java.lang.String)
//  .customPeriod(GoogleBillingBudgetBudgetFilterCustomPeriod)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .projects(java.util.List<java.lang.String>)
//  .resourceAncestors(java.util.List<java.lang.String>)
//  .services(java.util.List<java.lang.String>)
//  .subaccounts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypes">creditTypes</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypesTreatment">creditTypesTreatment</a></code> | <code>java.lang.String</code> | Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.customPeriod">customPeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | custom_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.resourceAncestors">resourceAncestors</a></code> | <code>java.util.List<java.lang.String></code> | A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.subaccounts">subaccounts</a></code> | <code>java.util.List<java.lang.String></code> | A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget. |

---

##### `calendarPeriod`<sup>Optional</sup> <a name="calendarPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.calendarPeriod"></a>

```java
public java.lang.String getCalendarPeriod();
```

- *Type:* java.lang.String

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#calendar_period GoogleBillingBudget#calendar_period}

---

##### `creditTypes`<sup>Optional</sup> <a name="creditTypes" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypes"></a>

```java
public java.util.List<java.lang.String> getCreditTypes();
```

- *Type:* java.util.List<java.lang.String>

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#credit_types GoogleBillingBudget#credit_types}

---

##### `creditTypesTreatment`<sup>Optional</sup> <a name="creditTypesTreatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypesTreatment"></a>

```java
public java.lang.String getCreditTypesTreatment();
```

- *Type:* java.lang.String

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#credit_types_treatment GoogleBillingBudget#credit_types_treatment}

---

##### `customPeriod`<sup>Optional</sup> <a name="customPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.customPeriod"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriod getCustomPeriod();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#custom_period GoogleBillingBudget#custom_period}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#labels GoogleBillingBudget#labels}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#projects GoogleBillingBudget#projects}

---

##### `resourceAncestors`<sup>Optional</sup> <a name="resourceAncestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.resourceAncestors"></a>

```java
public java.util.List<java.lang.String> getResourceAncestors();
```

- *Type:* java.util.List<java.lang.String>

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#resource_ancestors GoogleBillingBudget#resource_ancestors}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#services GoogleBillingBudget#services}

---

##### `subaccounts`<sup>Optional</sup> <a name="subaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.subaccounts"></a>

```java
public java.util.List<java.lang.String> getSubaccounts();
```

- *Type:* java.util.List<java.lang.String>

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#subaccounts GoogleBillingBudget#subaccounts}

---

### GoogleBillingBudgetBudgetFilterCustomPeriod <a name="GoogleBillingBudgetBudgetFilterCustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetBudgetFilterCustomPeriod;

GoogleBillingBudgetBudgetFilterCustomPeriod.builder()
    .startDate(GoogleBillingBudgetBudgetFilterCustomPeriodStartDate)
//  .endDate(GoogleBillingBudgetBudgetFilterCustomPeriodEndDate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | end_date block. |

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.startDate"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodStartDate getStartDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#start_date GoogleBillingBudget#start_date}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.endDate"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodEndDate getEndDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#end_date GoogleBillingBudget#end_date}

---

### GoogleBillingBudgetBudgetFilterCustomPeriodEndDate <a name="GoogleBillingBudgetBudgetFilterCustomPeriodEndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate;

GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.builder()
    .day(java.lang.Number)
    .month(java.lang.Number)
    .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#day GoogleBillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#month GoogleBillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#year GoogleBillingBudget#year}

---

### GoogleBillingBudgetBudgetFilterCustomPeriodStartDate <a name="GoogleBillingBudgetBudgetFilterCustomPeriodStartDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate;

GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.builder()
    .day(java.lang.Number)
    .month(java.lang.Number)
    .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#day GoogleBillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#month GoogleBillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#year GoogleBillingBudget#year}

---

### GoogleBillingBudgetConfig <a name="GoogleBillingBudgetConfig" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetConfig;

GoogleBillingBudgetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .amount(GoogleBillingBudgetAmount)
    .billingAccount(java.lang.String)
//  .allUpdatesRule(GoogleBillingBudgetAllUpdatesRule)
//  .budgetFilter(GoogleBillingBudgetBudgetFilter)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ownershipScope(java.lang.String)
//  .thresholdRules(IResolvable)
//  .thresholdRules(java.util.List<GoogleBillingBudgetThresholdRules>)
//  .timeouts(GoogleBillingBudgetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.allUpdatesRule">allUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.budgetFilter">budgetFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.ownershipScope">ownershipScope</a></code> | <code>java.lang.String</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.thresholdRules">thresholdRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>></code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.amount"></a>

```java
public GoogleBillingBudgetAmount getAmount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#amount GoogleBillingBudget#amount}

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.billingAccount"></a>

```java
public java.lang.String getBillingAccount();
```

- *Type:* java.lang.String

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#billing_account GoogleBillingBudget#billing_account}

---

##### `allUpdatesRule`<sup>Optional</sup> <a name="allUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.allUpdatesRule"></a>

```java
public GoogleBillingBudgetAllUpdatesRule getAllUpdatesRule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#all_updates_rule GoogleBillingBudget#all_updates_rule}

---

##### `budgetFilter`<sup>Optional</sup> <a name="budgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.budgetFilter"></a>

```java
public GoogleBillingBudgetBudgetFilter getBudgetFilter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#budget_filter GoogleBillingBudget#budget_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#display_name GoogleBillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownershipScope`<sup>Optional</sup> <a name="ownershipScope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.ownershipScope"></a>

```java
public java.lang.String getOwnershipScope();
```

- *Type:* java.lang.String

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#ownership_scope GoogleBillingBudget#ownership_scope}

---

##### `thresholdRules`<sup>Optional</sup> <a name="thresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.thresholdRules"></a>

```java
public java.lang.Object getThresholdRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>>

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#threshold_rules GoogleBillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.timeouts"></a>

```java
public GoogleBillingBudgetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#timeouts GoogleBillingBudget#timeouts}

---

### GoogleBillingBudgetThresholdRules <a name="GoogleBillingBudgetThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetThresholdRules;

GoogleBillingBudgetThresholdRules.builder()
    .thresholdPercent(java.lang.Number)
//  .spendBasis(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.thresholdPercent">thresholdPercent</a></code> | <code>java.lang.Number</code> | Send an alert when this threshold is exceeded. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.spendBasis">spendBasis</a></code> | <code>java.lang.String</code> | The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]. |

---

##### `thresholdPercent`<sup>Required</sup> <a name="thresholdPercent" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.thresholdPercent"></a>

```java
public java.lang.Number getThresholdPercent();
```

- *Type:* java.lang.Number

Send an alert when this threshold is exceeded.

This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#threshold_percent GoogleBillingBudget#threshold_percent}

---

##### `spendBasis`<sup>Optional</sup> <a name="spendBasis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.spendBasis"></a>

```java
public java.lang.String getSpendBasis();
```

- *Type:* java.lang.String

The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#spend_basis GoogleBillingBudget#spend_basis}

---

### GoogleBillingBudgetTimeouts <a name="GoogleBillingBudgetTimeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetTimeouts;

GoogleBillingBudgetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#create GoogleBillingBudget#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#delete GoogleBillingBudget#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#update GoogleBillingBudget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#create GoogleBillingBudget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#delete GoogleBillingBudget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#update GoogleBillingBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBillingBudgetAllUpdatesRuleOutputReference <a name="GoogleBillingBudgetAllUpdatesRuleOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetAllUpdatesRuleOutputReference;

new GoogleBillingBudgetAllUpdatesRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients">resetDisableDefaultIamRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients">resetEnableProjectLevelRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels">resetMonitoringNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion">resetSchemaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableDefaultIamRecipients` <a name="resetDisableDefaultIamRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients"></a>

```java
public void resetDisableDefaultIamRecipients()
```

##### `resetEnableProjectLevelRecipients` <a name="resetEnableProjectLevelRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients"></a>

```java
public void resetEnableProjectLevelRecipients()
```

##### `resetMonitoringNotificationChannels` <a name="resetMonitoringNotificationChannels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels"></a>

```java
public void resetMonitoringNotificationChannels()
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic"></a>

```java
public void resetPubsubTopic()
```

##### `resetSchemaVersion` <a name="resetSchemaVersion" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion"></a>

```java
public void resetSchemaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput">disableDefaultIamRecipientsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput">enableProjectLevelRecipientsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput">monitoringNotificationChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput">schemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients">disableDefaultIamRecipients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients">enableProjectLevelRecipients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels">monitoringNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion">schemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableDefaultIamRecipientsInput`<sup>Optional</sup> <a name="disableDefaultIamRecipientsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput"></a>

```java
public java.lang.Object getDisableDefaultIamRecipientsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableProjectLevelRecipientsInput`<sup>Optional</sup> <a name="enableProjectLevelRecipientsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput"></a>

```java
public java.lang.Object getEnableProjectLevelRecipientsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `monitoringNotificationChannelsInput`<sup>Optional</sup> <a name="monitoringNotificationChannelsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput"></a>

```java
public java.util.List<java.lang.String> getMonitoringNotificationChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `schemaVersionInput`<sup>Optional</sup> <a name="schemaVersionInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput"></a>

```java
public java.lang.String getSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `disableDefaultIamRecipients`<sup>Required</sup> <a name="disableDefaultIamRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients"></a>

```java
public java.lang.Object getDisableDefaultIamRecipients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableProjectLevelRecipients`<sup>Required</sup> <a name="enableProjectLevelRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients"></a>

```java
public java.lang.Object getEnableProjectLevelRecipients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `monitoringNotificationChannels`<sup>Required</sup> <a name="monitoringNotificationChannels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getMonitoringNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `schemaVersion`<sup>Required</sup> <a name="schemaVersion" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion"></a>

```java
public java.lang.String getSchemaVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.internalValue"></a>

```java
public GoogleBillingBudgetAllUpdatesRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

---


### GoogleBillingBudgetAmountOutputReference <a name="GoogleBillingBudgetAmountOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetAmountOutputReference;

new GoogleBillingBudgetAmountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount">putSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetLastPeriodAmount">resetLastPeriodAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetSpecifiedAmount">resetSpecifiedAmount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecifiedAmount` <a name="putSpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount"></a>

```java
public void putSpecifiedAmount(GoogleBillingBudgetAmountSpecifiedAmount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

---

##### `resetLastPeriodAmount` <a name="resetLastPeriodAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetLastPeriodAmount"></a>

```java
public void resetLastPeriodAmount()
```

##### `resetSpecifiedAmount` <a name="resetSpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetSpecifiedAmount"></a>

```java
public void resetSpecifiedAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmount">specifiedAmount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference">GoogleBillingBudgetAmountSpecifiedAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmountInput">lastPeriodAmountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmountInput">specifiedAmountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmount">lastPeriodAmount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `specifiedAmount`<sup>Required</sup> <a name="specifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmount"></a>

```java
public GoogleBillingBudgetAmountSpecifiedAmountOutputReference getSpecifiedAmount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference">GoogleBillingBudgetAmountSpecifiedAmountOutputReference</a>

---

##### `lastPeriodAmountInput`<sup>Optional</sup> <a name="lastPeriodAmountInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmountInput"></a>

```java
public java.lang.Object getLastPeriodAmountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `specifiedAmountInput`<sup>Optional</sup> <a name="specifiedAmountInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmountInput"></a>

```java
public GoogleBillingBudgetAmountSpecifiedAmount getSpecifiedAmountInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

---

##### `lastPeriodAmount`<sup>Required</sup> <a name="lastPeriodAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmount"></a>

```java
public java.lang.Object getLastPeriodAmount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.internalValue"></a>

```java
public GoogleBillingBudgetAmount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

---


### GoogleBillingBudgetAmountSpecifiedAmountOutputReference <a name="GoogleBillingBudgetAmountSpecifiedAmountOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference;

new GoogleBillingBudgetAmountSpecifiedAmountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode">resetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetUnits">resetUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrencyCode` <a name="resetCurrencyCode" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode"></a>

```java
public void resetCurrencyCode()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetUnits` <a name="resetUnits" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetUnits"></a>

```java
public void resetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput">currencyCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currencyCodeInput`<sup>Optional</sup> <a name="currencyCodeInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput"></a>

```java
public java.lang.String getCurrencyCodeInput();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue"></a>

```java
public GoogleBillingBudgetAmountSpecifiedAmount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference;

new GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodEndDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference;

new GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate">resetEndDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate"></a>

```java
public void putEndDate(GoogleBillingBudgetBudgetFilterCustomPeriodEndDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate"></a>

```java
public void putStartDate(GoogleBillingBudgetBudgetFilterCustomPeriodStartDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate"></a>

```java
public void resetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference getEndDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference getStartDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodEndDate getEndDateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodStartDate getStartDateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference;

new GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodStartDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

---


### GoogleBillingBudgetBudgetFilterOutputReference <a name="GoogleBillingBudgetBudgetFilterOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetBudgetFilterOutputReference;

new GoogleBillingBudgetBudgetFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod">putCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCalendarPeriod">resetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypes">resetCreditTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment">resetCreditTypesTreatment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCustomPeriod">resetCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetProjects">resetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetResourceAncestors">resetResourceAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetSubaccounts">resetSubaccounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPeriod` <a name="putCustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod"></a>

```java
public void putCustomPeriod(GoogleBillingBudgetBudgetFilterCustomPeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

---

##### `resetCalendarPeriod` <a name="resetCalendarPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCalendarPeriod"></a>

```java
public void resetCalendarPeriod()
```

##### `resetCreditTypes` <a name="resetCreditTypes" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypes"></a>

```java
public void resetCreditTypes()
```

##### `resetCreditTypesTreatment` <a name="resetCreditTypesTreatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment"></a>

```java
public void resetCreditTypesTreatment()
```

##### `resetCustomPeriod` <a name="resetCustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCustomPeriod"></a>

```java
public void resetCustomPeriod()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProjects` <a name="resetProjects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetProjects"></a>

```java
public void resetProjects()
```

##### `resetResourceAncestors` <a name="resetResourceAncestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetResourceAncestors"></a>

```java
public void resetResourceAncestors()
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetServices"></a>

```java
public void resetServices()
```

##### `resetSubaccounts` <a name="resetSubaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetSubaccounts"></a>

```java
public void resetSubaccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriod">customPeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput">calendarPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesInput">creditTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput">creditTypesTreatmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriodInput">customPeriodInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projectsInput">projectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput">resourceAncestorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccountsInput">subaccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypes">creditTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment">creditTypesTreatment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestors">resourceAncestors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccounts">subaccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPeriod`<sup>Required</sup> <a name="customPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriod"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference getCustomPeriod();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference</a>

---

##### `calendarPeriodInput`<sup>Optional</sup> <a name="calendarPeriodInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput"></a>

```java
public java.lang.String getCalendarPeriodInput();
```

- *Type:* java.lang.String

---

##### `creditTypesInput`<sup>Optional</sup> <a name="creditTypesInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesInput"></a>

```java
public java.util.List<java.lang.String> getCreditTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `creditTypesTreatmentInput`<sup>Optional</sup> <a name="creditTypesTreatmentInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput"></a>

```java
public java.lang.String getCreditTypesTreatmentInput();
```

- *Type:* java.lang.String

---

##### `customPeriodInput`<sup>Optional</sup> <a name="customPeriodInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriodInput"></a>

```java
public GoogleBillingBudgetBudgetFilterCustomPeriod getCustomPeriodInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projectsInput"></a>

```java
public java.util.List<java.lang.String> getProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceAncestorsInput`<sup>Optional</sup> <a name="resourceAncestorsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput"></a>

```java
public java.util.List<java.lang.String> getResourceAncestorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subaccountsInput`<sup>Optional</sup> <a name="subaccountsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccountsInput"></a>

```java
public java.util.List<java.lang.String> getSubaccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `calendarPeriod`<sup>Required</sup> <a name="calendarPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriod"></a>

```java
public java.lang.String getCalendarPeriod();
```

- *Type:* java.lang.String

---

##### `creditTypes`<sup>Required</sup> <a name="creditTypes" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypes"></a>

```java
public java.util.List<java.lang.String> getCreditTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `creditTypesTreatment`<sup>Required</sup> <a name="creditTypesTreatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment"></a>

```java
public java.lang.String getCreditTypesTreatment();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceAncestors`<sup>Required</sup> <a name="resourceAncestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestors"></a>

```java
public java.util.List<java.lang.String> getResourceAncestors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subaccounts`<sup>Required</sup> <a name="subaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccounts"></a>

```java
public java.util.List<java.lang.String> getSubaccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.internalValue"></a>

```java
public GoogleBillingBudgetBudgetFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

---


### GoogleBillingBudgetThresholdRulesList <a name="GoogleBillingBudgetThresholdRulesList" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetThresholdRulesList;

new GoogleBillingBudgetThresholdRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get"></a>

```java
public GoogleBillingBudgetThresholdRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>>

---


### GoogleBillingBudgetThresholdRulesOutputReference <a name="GoogleBillingBudgetThresholdRulesOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetThresholdRulesOutputReference;

new GoogleBillingBudgetThresholdRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resetSpendBasis">resetSpendBasis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpendBasis` <a name="resetSpendBasis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resetSpendBasis"></a>

```java
public void resetSpendBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasisInput">spendBasisInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput">thresholdPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasis">spendBasis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercent">thresholdPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spendBasisInput`<sup>Optional</sup> <a name="spendBasisInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasisInput"></a>

```java
public java.lang.String getSpendBasisInput();
```

- *Type:* java.lang.String

---

##### `thresholdPercentInput`<sup>Optional</sup> <a name="thresholdPercentInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput"></a>

```java
public java.lang.Number getThresholdPercentInput();
```

- *Type:* java.lang.Number

---

##### `spendBasis`<sup>Required</sup> <a name="spendBasis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasis"></a>

```java
public java.lang.String getSpendBasis();
```

- *Type:* java.lang.String

---

##### `thresholdPercent`<sup>Required</sup> <a name="thresholdPercent" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercent"></a>

```java
public java.lang.Number getThresholdPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>

---


### GoogleBillingBudgetTimeoutsOutputReference <a name="GoogleBillingBudgetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_billing_budget.GoogleBillingBudgetTimeoutsOutputReference;

new GoogleBillingBudgetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

---



