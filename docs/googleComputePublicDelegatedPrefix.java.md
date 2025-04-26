# `googleComputePublicDelegatedPrefix` Submodule <a name="`googleComputePublicDelegatedPrefix` Submodule" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePublicDelegatedPrefix <a name="GoogleComputePublicDelegatedPrefix" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix google_compute_public_delegated_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_delegated_prefix.GoogleComputePublicDelegatedPrefix;

GoogleComputePublicDelegatedPrefix.Builder.create(Construct scope, java.lang.String id)
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
    .ipCidrRange(java.lang.String)
    .name(java.lang.String)
    .parentPrefix(java.lang.String)
    .region(java.lang.String)
//  .allocatablePrefixLength(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isLiveMigration(java.lang.Boolean)
//  .isLiveMigration(IResolvable)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputePublicDelegatedPrefixTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP address range, in CIDR format, represented by this public delegated prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.parentPrefix">parentPrefix</a></code> | <code>java.lang.String</code> | The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | A region where the prefix will reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.allocatablePrefixLength">allocatablePrefixLength</a></code> | <code>java.lang.Number</code> | The allocatable prefix length supported by this public delegated prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#id GoogleComputePublicDelegatedPrefix#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.isLiveMigration">isLiveMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the prefix will be live migrated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Specifies the mode of this IPv6 PDP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#project GoogleComputePublicDelegatedPrefix#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The IP address range, in CIDR format, represented by this public delegated prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#ip_cidr_range GoogleComputePublicDelegatedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#name GoogleComputePublicDelegatedPrefix#name}

---

##### `parentPrefix`<sup>Required</sup> <a name="parentPrefix" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.parentPrefix"></a>

- *Type:* java.lang.String

The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#parent_prefix GoogleComputePublicDelegatedPrefix#parent_prefix}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.region"></a>

- *Type:* java.lang.String

A region where the prefix will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#region GoogleComputePublicDelegatedPrefix#region}

---

##### `allocatablePrefixLength`<sup>Optional</sup> <a name="allocatablePrefixLength" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.allocatablePrefixLength"></a>

- *Type:* java.lang.Number

The allocatable prefix length supported by this public delegated prefix.

This field is optional and cannot be set for prefixes in DELEGATION mode. It cannot be set for IPv4 prefixes either, and it always defaults to 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#allocatable_prefix_length GoogleComputePublicDelegatedPrefix#allocatable_prefix_length}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#description GoogleComputePublicDelegatedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#id GoogleComputePublicDelegatedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLiveMigration`<sup>Optional</sup> <a name="isLiveMigration" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.isLiveMigration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the prefix will be live migrated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#is_live_migration GoogleComputePublicDelegatedPrefix#is_live_migration}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Specifies the mode of this IPv6 PDP.

MODE must be one of: DELEGATION,
EXTERNAL_IPV6_FORWARDING_RULE_CREATION and EXTERNAL_IPV6_SUBNETWORK_CREATION. Possible values: ["DELEGATION", "EXTERNAL_IPV6_FORWARDING_RULE_CREATION", "EXTERNAL_IPV6_SUBNETWORK_CREATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#mode GoogleComputePublicDelegatedPrefix#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#project GoogleComputePublicDelegatedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#timeouts GoogleComputePublicDelegatedPrefix#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetAllocatablePrefixLength">resetAllocatablePrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetIsLiveMigration">resetIsLiveMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputePublicDelegatedPrefixTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

---

##### `resetAllocatablePrefixLength` <a name="resetAllocatablePrefixLength" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetAllocatablePrefixLength"></a>

```java
public void resetAllocatablePrefixLength()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetId"></a>

```java
public void resetId()
```

##### `resetIsLiveMigration` <a name="resetIsLiveMigration" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetIsLiveMigration"></a>

```java
public void resetIsLiveMigration()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetMode"></a>

```java
public void resetMode()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePublicDelegatedPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_delegated_prefix.GoogleComputePublicDelegatedPrefix;

GoogleComputePublicDelegatedPrefix.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_delegated_prefix.GoogleComputePublicDelegatedPrefix;

GoogleComputePublicDelegatedPrefix.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_delegated_prefix.GoogleComputePublicDelegatedPrefix;

GoogleComputePublicDelegatedPrefix.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_delegated_prefix.GoogleComputePublicDelegatedPrefix;

GoogleComputePublicDelegatedPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputePublicDelegatedPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputePublicDelegatedPrefix resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputePublicDelegatedPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputePublicDelegatedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePublicDelegatedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference">GoogleComputePublicDelegatedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.allocatablePrefixLengthInput">allocatablePrefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.isLiveMigrationInput">isLiveMigrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.parentPrefixInput">parentPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.allocatablePrefixLength">allocatablePrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.isLiveMigration">isLiveMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.parentPrefix">parentPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.timeouts"></a>

```java
public GoogleComputePublicDelegatedPrefixTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference">GoogleComputePublicDelegatedPrefixTimeoutsOutputReference</a>

---

##### `allocatablePrefixLengthInput`<sup>Optional</sup> <a name="allocatablePrefixLengthInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.allocatablePrefixLengthInput"></a>

```java
public java.lang.Number getAllocatablePrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `isLiveMigrationInput`<sup>Optional</sup> <a name="isLiveMigrationInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.isLiveMigrationInput"></a>

```java
public java.lang.Object getIsLiveMigrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentPrefixInput`<sup>Optional</sup> <a name="parentPrefixInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.parentPrefixInput"></a>

```java
public java.lang.String getParentPrefixInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

---

##### `allocatablePrefixLength`<sup>Required</sup> <a name="allocatablePrefixLength" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.allocatablePrefixLength"></a>

```java
public java.lang.Number getAllocatablePrefixLength();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `isLiveMigration`<sup>Required</sup> <a name="isLiveMigration" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.isLiveMigration"></a>

```java
public java.lang.Object getIsLiveMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentPrefix`<sup>Required</sup> <a name="parentPrefix" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.parentPrefix"></a>

```java
public java.lang.String getParentPrefix();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePublicDelegatedPrefixConfig <a name="GoogleComputePublicDelegatedPrefixConfig" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_delegated_prefix.GoogleComputePublicDelegatedPrefixConfig;

GoogleComputePublicDelegatedPrefixConfig.builder()
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
    .ipCidrRange(java.lang.String)
    .name(java.lang.String)
    .parentPrefix(java.lang.String)
    .region(java.lang.String)
//  .allocatablePrefixLength(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isLiveMigration(java.lang.Boolean)
//  .isLiveMigration(IResolvable)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputePublicDelegatedPrefixTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP address range, in CIDR format, represented by this public delegated prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.parentPrefix">parentPrefix</a></code> | <code>java.lang.String</code> | The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.region">region</a></code> | <code>java.lang.String</code> | A region where the prefix will reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.allocatablePrefixLength">allocatablePrefixLength</a></code> | <code>java.lang.Number</code> | The allocatable prefix length supported by this public delegated prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#id GoogleComputePublicDelegatedPrefix#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.isLiveMigration">isLiveMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the prefix will be live migrated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Specifies the mode of this IPv6 PDP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#project GoogleComputePublicDelegatedPrefix#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IP address range, in CIDR format, represented by this public delegated prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#ip_cidr_range GoogleComputePublicDelegatedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#name GoogleComputePublicDelegatedPrefix#name}

---

##### `parentPrefix`<sup>Required</sup> <a name="parentPrefix" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.parentPrefix"></a>

```java
public java.lang.String getParentPrefix();
```

- *Type:* java.lang.String

The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#parent_prefix GoogleComputePublicDelegatedPrefix#parent_prefix}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A region where the prefix will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#region GoogleComputePublicDelegatedPrefix#region}

---

##### `allocatablePrefixLength`<sup>Optional</sup> <a name="allocatablePrefixLength" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.allocatablePrefixLength"></a>

```java
public java.lang.Number getAllocatablePrefixLength();
```

- *Type:* java.lang.Number

The allocatable prefix length supported by this public delegated prefix.

This field is optional and cannot be set for prefixes in DELEGATION mode. It cannot be set for IPv4 prefixes either, and it always defaults to 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#allocatable_prefix_length GoogleComputePublicDelegatedPrefix#allocatable_prefix_length}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#description GoogleComputePublicDelegatedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#id GoogleComputePublicDelegatedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLiveMigration`<sup>Optional</sup> <a name="isLiveMigration" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.isLiveMigration"></a>

```java
public java.lang.Object getIsLiveMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the prefix will be live migrated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#is_live_migration GoogleComputePublicDelegatedPrefix#is_live_migration}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Specifies the mode of this IPv6 PDP.

MODE must be one of: DELEGATION,
EXTERNAL_IPV6_FORWARDING_RULE_CREATION and EXTERNAL_IPV6_SUBNETWORK_CREATION. Possible values: ["DELEGATION", "EXTERNAL_IPV6_FORWARDING_RULE_CREATION", "EXTERNAL_IPV6_SUBNETWORK_CREATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#mode GoogleComputePublicDelegatedPrefix#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#project GoogleComputePublicDelegatedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.timeouts"></a>

```java
public GoogleComputePublicDelegatedPrefixTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#timeouts GoogleComputePublicDelegatedPrefix#timeouts}

---

### GoogleComputePublicDelegatedPrefixTimeouts <a name="GoogleComputePublicDelegatedPrefixTimeouts" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_delegated_prefix.GoogleComputePublicDelegatedPrefixTimeouts;

GoogleComputePublicDelegatedPrefixTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#create GoogleComputePublicDelegatedPrefix#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#delete GoogleComputePublicDelegatedPrefix#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#create GoogleComputePublicDelegatedPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_compute_public_delegated_prefix#delete GoogleComputePublicDelegatedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePublicDelegatedPrefixTimeoutsOutputReference <a name="GoogleComputePublicDelegatedPrefixTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_delegated_prefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference;

new GoogleComputePublicDelegatedPrefixTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

---



