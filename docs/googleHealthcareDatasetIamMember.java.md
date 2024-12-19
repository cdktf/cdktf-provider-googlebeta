# `googleHealthcareDatasetIamMember` Submodule <a name="`googleHealthcareDatasetIamMember` Submodule" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareDatasetIamMember <a name="GoogleHealthcareDatasetIamMember" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member google_healthcare_dataset_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_healthcare_dataset_iam_member.GoogleHealthcareDatasetIamMember;

GoogleHealthcareDatasetIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .datasetId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleHealthcareDatasetIamMemberCondition)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#dataset_id GoogleHealthcareDatasetIamMember#dataset_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#member GoogleHealthcareDatasetIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#role GoogleHealthcareDatasetIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#id GoogleHealthcareDatasetIamMember#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.datasetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#dataset_id GoogleHealthcareDatasetIamMember#dataset_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#member GoogleHealthcareDatasetIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#role GoogleHealthcareDatasetIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#condition GoogleHealthcareDatasetIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#id GoogleHealthcareDatasetIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.putCondition"></a>

```java
public void putCondition(GoogleHealthcareDatasetIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleHealthcareDatasetIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_healthcare_dataset_iam_member.GoogleHealthcareDatasetIamMember;

GoogleHealthcareDatasetIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_healthcare_dataset_iam_member.GoogleHealthcareDatasetIamMember;

GoogleHealthcareDatasetIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_healthcare_dataset_iam_member.GoogleHealthcareDatasetIamMember;

GoogleHealthcareDatasetIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_healthcare_dataset_iam_member.GoogleHealthcareDatasetIamMember;

GoogleHealthcareDatasetIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleHealthcareDatasetIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleHealthcareDatasetIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleHealthcareDatasetIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleHealthcareDatasetIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareDatasetIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference">GoogleHealthcareDatasetIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.condition"></a>

```java
public GoogleHealthcareDatasetIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference">GoogleHealthcareDatasetIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.conditionInput"></a>

```java
public GoogleHealthcareDatasetIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareDatasetIamMemberCondition <a name="GoogleHealthcareDatasetIamMemberCondition" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_healthcare_dataset_iam_member.GoogleHealthcareDatasetIamMemberCondition;

GoogleHealthcareDatasetIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#expression GoogleHealthcareDatasetIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#title GoogleHealthcareDatasetIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#description GoogleHealthcareDatasetIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#expression GoogleHealthcareDatasetIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#title GoogleHealthcareDatasetIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#description GoogleHealthcareDatasetIamMember#description}.

---

### GoogleHealthcareDatasetIamMemberConfig <a name="GoogleHealthcareDatasetIamMemberConfig" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_healthcare_dataset_iam_member.GoogleHealthcareDatasetIamMemberConfig;

GoogleHealthcareDatasetIamMemberConfig.builder()
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
    .datasetId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleHealthcareDatasetIamMemberCondition)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#dataset_id GoogleHealthcareDatasetIamMember#dataset_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#member GoogleHealthcareDatasetIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#role GoogleHealthcareDatasetIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#id GoogleHealthcareDatasetIamMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#dataset_id GoogleHealthcareDatasetIamMember#dataset_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#member GoogleHealthcareDatasetIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#role GoogleHealthcareDatasetIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.condition"></a>

```java
public GoogleHealthcareDatasetIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#condition GoogleHealthcareDatasetIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dataset_iam_member#id GoogleHealthcareDatasetIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareDatasetIamMemberConditionOutputReference <a name="GoogleHealthcareDatasetIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_healthcare_dataset_iam_member.GoogleHealthcareDatasetIamMemberConditionOutputReference;

new GoogleHealthcareDatasetIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleHealthcareDatasetIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDatasetIamMember.GoogleHealthcareDatasetIamMemberCondition">GoogleHealthcareDatasetIamMemberCondition</a>

---



