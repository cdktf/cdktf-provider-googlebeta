# `googleGkeHubMembershipIamMember` Submodule <a name="`googleGkeHubMembershipIamMember` Submodule" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubMembershipIamMember <a name="GoogleGkeHubMembershipIamMember" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member google_gke_hub_membership_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_iam_member.GoogleGkeHubMembershipIamMember;

GoogleGkeHubMembershipIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .member(java.lang.String)
    .membershipId(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleGkeHubMembershipIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#member GoogleGkeHubMembershipIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.membershipId">membershipId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#membership_id GoogleGkeHubMembershipIamMember#membership_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#role GoogleGkeHubMembershipIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#id GoogleGkeHubMembershipIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#location GoogleGkeHubMembershipIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#project GoogleGkeHubMembershipIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#member GoogleGkeHubMembershipIamMember#member}.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.membershipId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#membership_id GoogleGkeHubMembershipIamMember#membership_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#role GoogleGkeHubMembershipIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#condition GoogleGkeHubMembershipIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#id GoogleGkeHubMembershipIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#location GoogleGkeHubMembershipIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#project GoogleGkeHubMembershipIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.putCondition"></a>

```java
public void putCondition(GoogleGkeHubMembershipIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubMembershipIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_iam_member.GoogleGkeHubMembershipIamMember;

GoogleGkeHubMembershipIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_iam_member.GoogleGkeHubMembershipIamMember;

GoogleGkeHubMembershipIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_iam_member.GoogleGkeHubMembershipIamMember;

GoogleGkeHubMembershipIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_iam_member.GoogleGkeHubMembershipIamMember;

GoogleGkeHubMembershipIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGkeHubMembershipIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGkeHubMembershipIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGkeHubMembershipIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGkeHubMembershipIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubMembershipIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference">GoogleGkeHubMembershipIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.membershipIdInput">membershipIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.membershipId">membershipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.condition"></a>

```java
public GoogleGkeHubMembershipIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference">GoogleGkeHubMembershipIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.conditionInput"></a>

```java
public GoogleGkeHubMembershipIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `membershipIdInput`<sup>Optional</sup> <a name="membershipIdInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.membershipIdInput"></a>

```java
public java.lang.String getMembershipIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.membershipId"></a>

```java
public java.lang.String getMembershipId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubMembershipIamMemberCondition <a name="GoogleGkeHubMembershipIamMemberCondition" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_iam_member.GoogleGkeHubMembershipIamMemberCondition;

GoogleGkeHubMembershipIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#expression GoogleGkeHubMembershipIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#title GoogleGkeHubMembershipIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#description GoogleGkeHubMembershipIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#expression GoogleGkeHubMembershipIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#title GoogleGkeHubMembershipIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#description GoogleGkeHubMembershipIamMember#description}.

---

### GoogleGkeHubMembershipIamMemberConfig <a name="GoogleGkeHubMembershipIamMemberConfig" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_iam_member.GoogleGkeHubMembershipIamMemberConfig;

GoogleGkeHubMembershipIamMemberConfig.builder()
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
    .member(java.lang.String)
    .membershipId(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleGkeHubMembershipIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#member GoogleGkeHubMembershipIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.membershipId">membershipId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#membership_id GoogleGkeHubMembershipIamMember#membership_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#role GoogleGkeHubMembershipIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#id GoogleGkeHubMembershipIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#location GoogleGkeHubMembershipIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#project GoogleGkeHubMembershipIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#member GoogleGkeHubMembershipIamMember#member}.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.membershipId"></a>

```java
public java.lang.String getMembershipId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#membership_id GoogleGkeHubMembershipIamMember#membership_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#role GoogleGkeHubMembershipIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.condition"></a>

```java
public GoogleGkeHubMembershipIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#condition GoogleGkeHubMembershipIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#id GoogleGkeHubMembershipIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#location GoogleGkeHubMembershipIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.35.0/docs/resources/google_gke_hub_membership_iam_member#project GoogleGkeHubMembershipIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubMembershipIamMemberConditionOutputReference <a name="GoogleGkeHubMembershipIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_iam_member.GoogleGkeHubMembershipIamMemberConditionOutputReference;

new GoogleGkeHubMembershipIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubMembershipIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipIamMember.GoogleGkeHubMembershipIamMemberCondition">GoogleGkeHubMembershipIamMemberCondition</a>

---



