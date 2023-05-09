# `google_privateca_ca_pool_iam_binding`

Refer to the Terraform Registory for docs: [`google_privateca_ca_pool_iam_binding`](https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding).

# `googlePrivatecaCaPoolIamBinding` Submodule <a name="`googlePrivatecaCaPoolIamBinding` Submodule" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivatecaCaPoolIamBinding <a name="GooglePrivatecaCaPoolIamBinding" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding google_privateca_ca_pool_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_binding.GooglePrivatecaCaPoolIamBinding;

GooglePrivatecaCaPoolIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .caPool(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(GooglePrivatecaCaPoolIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.caPool">caPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#ca_pool GooglePrivatecaCaPoolIamBinding#ca_pool}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#members GooglePrivatecaCaPoolIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#role GooglePrivatecaCaPoolIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#id GooglePrivatecaCaPoolIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#location GooglePrivatecaCaPoolIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#project GooglePrivatecaCaPoolIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.caPool"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#ca_pool GooglePrivatecaCaPoolIamBinding#ca_pool}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#members GooglePrivatecaCaPoolIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#role GooglePrivatecaCaPoolIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#condition GooglePrivatecaCaPoolIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#id GooglePrivatecaCaPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#location GooglePrivatecaCaPoolIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#project GooglePrivatecaCaPoolIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.putCondition"></a>

```java
public void putCondition(GooglePrivatecaCaPoolIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_binding.GooglePrivatecaCaPoolIamBinding;

GooglePrivatecaCaPoolIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_binding.GooglePrivatecaCaPoolIamBinding;

GooglePrivatecaCaPoolIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_binding.GooglePrivatecaCaPoolIamBinding;

GooglePrivatecaCaPoolIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference">GooglePrivatecaCaPoolIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.caPoolInput">caPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.caPool">caPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.condition"></a>

```java
public GooglePrivatecaCaPoolIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference">GooglePrivatecaCaPoolIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.caPoolInput"></a>

```java
public java.lang.String getCaPoolInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.conditionInput"></a>

```java
public GooglePrivatecaCaPoolIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivatecaCaPoolIamBindingCondition <a name="GooglePrivatecaCaPoolIamBindingCondition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_binding.GooglePrivatecaCaPoolIamBindingCondition;

GooglePrivatecaCaPoolIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#expression GooglePrivatecaCaPoolIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#title GooglePrivatecaCaPoolIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#description GooglePrivatecaCaPoolIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#expression GooglePrivatecaCaPoolIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#title GooglePrivatecaCaPoolIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#description GooglePrivatecaCaPoolIamBinding#description}.

---

### GooglePrivatecaCaPoolIamBindingConfig <a name="GooglePrivatecaCaPoolIamBindingConfig" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_binding.GooglePrivatecaCaPoolIamBindingConfig;

GooglePrivatecaCaPoolIamBindingConfig.builder()
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
    .caPool(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(GooglePrivatecaCaPoolIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.caPool">caPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#ca_pool GooglePrivatecaCaPoolIamBinding#ca_pool}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#members GooglePrivatecaCaPoolIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#role GooglePrivatecaCaPoolIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#id GooglePrivatecaCaPoolIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#location GooglePrivatecaCaPoolIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#project GooglePrivatecaCaPoolIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#ca_pool GooglePrivatecaCaPoolIamBinding#ca_pool}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#members GooglePrivatecaCaPoolIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#role GooglePrivatecaCaPoolIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.condition"></a>

```java
public GooglePrivatecaCaPoolIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#condition GooglePrivatecaCaPoolIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#id GooglePrivatecaCaPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#location GooglePrivatecaCaPoolIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_privateca_ca_pool_iam_binding#project GooglePrivatecaCaPoolIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivatecaCaPoolIamBindingConditionOutputReference <a name="GooglePrivatecaCaPoolIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_binding.GooglePrivatecaCaPoolIamBindingConditionOutputReference;

new GooglePrivatecaCaPoolIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingConditionOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamBinding.GooglePrivatecaCaPoolIamBindingCondition">GooglePrivatecaCaPoolIamBindingCondition</a>

---



