# `googlePrivatecaCaPoolIamMember` Submodule <a name="`googlePrivatecaCaPoolIamMember` Submodule" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivatecaCaPoolIamMember <a name="GooglePrivatecaCaPoolIamMember" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member google_privateca_ca_pool_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_member.GooglePrivatecaCaPoolIamMember;

GooglePrivatecaCaPoolIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GooglePrivatecaCaPoolIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.caPool">caPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#ca_pool GooglePrivatecaCaPoolIamMember#ca_pool}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#member GooglePrivatecaCaPoolIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#role GooglePrivatecaCaPoolIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#id GooglePrivatecaCaPoolIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#location GooglePrivatecaCaPoolIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#project GooglePrivatecaCaPoolIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.caPool"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#ca_pool GooglePrivatecaCaPoolIamMember#ca_pool}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#member GooglePrivatecaCaPoolIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#role GooglePrivatecaCaPoolIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#condition GooglePrivatecaCaPoolIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#id GooglePrivatecaCaPoolIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#location GooglePrivatecaCaPoolIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#project GooglePrivatecaCaPoolIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.putCondition"></a>

```java
public void putCondition(GooglePrivatecaCaPoolIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePrivatecaCaPoolIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_member.GooglePrivatecaCaPoolIamMember;

GooglePrivatecaCaPoolIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_member.GooglePrivatecaCaPoolIamMember;

GooglePrivatecaCaPoolIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_member.GooglePrivatecaCaPoolIamMember;

GooglePrivatecaCaPoolIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_member.GooglePrivatecaCaPoolIamMember;

GooglePrivatecaCaPoolIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GooglePrivatecaCaPoolIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GooglePrivatecaCaPoolIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GooglePrivatecaCaPoolIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GooglePrivatecaCaPoolIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivatecaCaPoolIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference">GooglePrivatecaCaPoolIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.caPoolInput">caPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.caPool">caPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.condition"></a>

```java
public GooglePrivatecaCaPoolIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference">GooglePrivatecaCaPoolIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.caPoolInput"></a>

```java
public java.lang.String getCaPoolInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.conditionInput"></a>

```java
public GooglePrivatecaCaPoolIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivatecaCaPoolIamMemberCondition <a name="GooglePrivatecaCaPoolIamMemberCondition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_member.GooglePrivatecaCaPoolIamMemberCondition;

GooglePrivatecaCaPoolIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#expression GooglePrivatecaCaPoolIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#title GooglePrivatecaCaPoolIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#description GooglePrivatecaCaPoolIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#expression GooglePrivatecaCaPoolIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#title GooglePrivatecaCaPoolIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#description GooglePrivatecaCaPoolIamMember#description}.

---

### GooglePrivatecaCaPoolIamMemberConfig <a name="GooglePrivatecaCaPoolIamMemberConfig" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_member.GooglePrivatecaCaPoolIamMemberConfig;

GooglePrivatecaCaPoolIamMemberConfig.builder()
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
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GooglePrivatecaCaPoolIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.caPool">caPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#ca_pool GooglePrivatecaCaPoolIamMember#ca_pool}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#member GooglePrivatecaCaPoolIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#role GooglePrivatecaCaPoolIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#id GooglePrivatecaCaPoolIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#location GooglePrivatecaCaPoolIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#project GooglePrivatecaCaPoolIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#ca_pool GooglePrivatecaCaPoolIamMember#ca_pool}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#member GooglePrivatecaCaPoolIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#role GooglePrivatecaCaPoolIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.condition"></a>

```java
public GooglePrivatecaCaPoolIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#condition GooglePrivatecaCaPoolIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#id GooglePrivatecaCaPoolIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#location GooglePrivatecaCaPoolIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_privateca_ca_pool_iam_member#project GooglePrivatecaCaPoolIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivatecaCaPoolIamMemberConditionOutputReference <a name="GooglePrivatecaCaPoolIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privateca_ca_pool_iam_member.GooglePrivatecaCaPoolIamMemberConditionOutputReference;

new GooglePrivatecaCaPoolIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GooglePrivatecaCaPoolIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPoolIamMember.GooglePrivatecaCaPoolIamMemberCondition">GooglePrivatecaCaPoolIamMemberCondition</a>

---



