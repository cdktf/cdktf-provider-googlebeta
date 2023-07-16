# `google_kms_key_ring_iam_binding`

Refer to the Terraform Registory for docs: [`google_kms_key_ring_iam_binding`](https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding).

# `googleKmsKeyRingIamBinding` Submodule <a name="`googleKmsKeyRingIamBinding` Submodule" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsKeyRingIamBinding <a name="GoogleKmsKeyRingIamBinding" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding google_kms_key_ring_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_iam_binding.GoogleKmsKeyRingIamBinding;

GoogleKmsKeyRingIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .keyRingId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(GoogleKmsKeyRingIamBindingCondition)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.keyRingId">keyRingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#key_ring_id GoogleKmsKeyRingIamBinding#key_ring_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#members GoogleKmsKeyRingIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#role GoogleKmsKeyRingIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#id GoogleKmsKeyRingIamBinding#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyRingId`<sup>Required</sup> <a name="keyRingId" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.keyRingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#key_ring_id GoogleKmsKeyRingIamBinding#key_ring_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#members GoogleKmsKeyRingIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#role GoogleKmsKeyRingIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#condition GoogleKmsKeyRingIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#id GoogleKmsKeyRingIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.putCondition"></a>

```java
public void putCondition(GoogleKmsKeyRingIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_iam_binding.GoogleKmsKeyRingIamBinding;

GoogleKmsKeyRingIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_iam_binding.GoogleKmsKeyRingIamBinding;

GoogleKmsKeyRingIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_iam_binding.GoogleKmsKeyRingIamBinding;

GoogleKmsKeyRingIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference">GoogleKmsKeyRingIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.keyRingIdInput">keyRingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.keyRingId">keyRingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.condition"></a>

```java
public GoogleKmsKeyRingIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference">GoogleKmsKeyRingIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.conditionInput"></a>

```java
public GoogleKmsKeyRingIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyRingIdInput`<sup>Optional</sup> <a name="keyRingIdInput" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.keyRingIdInput"></a>

```java
public java.lang.String getKeyRingIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyRingId`<sup>Required</sup> <a name="keyRingId" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.keyRingId"></a>

```java
public java.lang.String getKeyRingId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsKeyRingIamBindingCondition <a name="GoogleKmsKeyRingIamBindingCondition" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_iam_binding.GoogleKmsKeyRingIamBindingCondition;

GoogleKmsKeyRingIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#expression GoogleKmsKeyRingIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#title GoogleKmsKeyRingIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#description GoogleKmsKeyRingIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#expression GoogleKmsKeyRingIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#title GoogleKmsKeyRingIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#description GoogleKmsKeyRingIamBinding#description}.

---

### GoogleKmsKeyRingIamBindingConfig <a name="GoogleKmsKeyRingIamBindingConfig" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_iam_binding.GoogleKmsKeyRingIamBindingConfig;

GoogleKmsKeyRingIamBindingConfig.builder()
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
    .keyRingId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(GoogleKmsKeyRingIamBindingCondition)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.keyRingId">keyRingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#key_ring_id GoogleKmsKeyRingIamBinding#key_ring_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#members GoogleKmsKeyRingIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#role GoogleKmsKeyRingIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#id GoogleKmsKeyRingIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyRingId`<sup>Required</sup> <a name="keyRingId" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.keyRingId"></a>

```java
public java.lang.String getKeyRingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#key_ring_id GoogleKmsKeyRingIamBinding#key_ring_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#members GoogleKmsKeyRingIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#role GoogleKmsKeyRingIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.condition"></a>

```java
public GoogleKmsKeyRingIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#condition GoogleKmsKeyRingIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_kms_key_ring_iam_binding#id GoogleKmsKeyRingIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsKeyRingIamBindingConditionOutputReference <a name="GoogleKmsKeyRingIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_iam_binding.GoogleKmsKeyRingIamBindingConditionOutputReference;

new GoogleKmsKeyRingIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingConditionOutputReference.property.internalValue"></a>

```java
public GoogleKmsKeyRingIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingIamBinding.GoogleKmsKeyRingIamBindingCondition">GoogleKmsKeyRingIamBindingCondition</a>

---



