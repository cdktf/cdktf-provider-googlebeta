# `googleComputePublicAdvertisedPrefix` Submodule <a name="`googleComputePublicAdvertisedPrefix` Submodule" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePublicAdvertisedPrefix <a name="GoogleComputePublicAdvertisedPrefix" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix google_compute_public_advertised_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_advertised_prefix.GoogleComputePublicAdvertisedPrefix;

GoogleComputePublicAdvertisedPrefix.Builder.create(Construct scope, java.lang.String id)
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
    .dnsVerificationIp(java.lang.String)
    .ipCidrRange(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .pdpScope(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputePublicAdvertisedPrefixTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.dnsVerificationIp">dnsVerificationIp</a></code> | <code>java.lang.String</code> | The IPv4 address to be used for reverse DNS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IPv4 address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#id GoogleComputePublicAdvertisedPrefix#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.pdpScope">pdpScope</a></code> | <code>java.lang.String</code> | Specifies how child public delegated prefix will be scoped. pdpScope must be one of: GLOBAL, REGIONAL Possible values: ["GLOBAL", "REGIONAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#project GoogleComputePublicAdvertisedPrefix#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsVerificationIp`<sup>Required</sup> <a name="dnsVerificationIp" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.dnsVerificationIp"></a>

- *Type:* java.lang.String

The IPv4 address to be used for reverse DNS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#dns_verification_ip GoogleComputePublicAdvertisedPrefix#dns_verification_ip}

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The IPv4 address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#ip_cidr_range GoogleComputePublicAdvertisedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#name GoogleComputePublicAdvertisedPrefix#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#description GoogleComputePublicAdvertisedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#id GoogleComputePublicAdvertisedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdpScope`<sup>Optional</sup> <a name="pdpScope" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.pdpScope"></a>

- *Type:* java.lang.String

Specifies how child public delegated prefix will be scoped. pdpScope must be one of: GLOBAL, REGIONAL Possible values: ["GLOBAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#pdp_scope GoogleComputePublicAdvertisedPrefix#pdp_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#project GoogleComputePublicAdvertisedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#timeouts GoogleComputePublicAdvertisedPrefix#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetPdpScope">resetPdpScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputePublicAdvertisedPrefixTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetId"></a>

```java
public void resetId()
```

##### `resetPdpScope` <a name="resetPdpScope" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetPdpScope"></a>

```java
public void resetPdpScope()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePublicAdvertisedPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_advertised_prefix.GoogleComputePublicAdvertisedPrefix;

GoogleComputePublicAdvertisedPrefix.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_advertised_prefix.GoogleComputePublicAdvertisedPrefix;

GoogleComputePublicAdvertisedPrefix.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_advertised_prefix.GoogleComputePublicAdvertisedPrefix;

GoogleComputePublicAdvertisedPrefix.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_advertised_prefix.GoogleComputePublicAdvertisedPrefix;

GoogleComputePublicAdvertisedPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputePublicAdvertisedPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputePublicAdvertisedPrefix resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputePublicAdvertisedPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputePublicAdvertisedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePublicAdvertisedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference">GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dnsVerificationIpInput">dnsVerificationIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.pdpScopeInput">pdpScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dnsVerificationIp">dnsVerificationIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.pdpScope">pdpScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.timeouts"></a>

```java
public GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference">GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsVerificationIpInput`<sup>Optional</sup> <a name="dnsVerificationIpInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dnsVerificationIpInput"></a>

```java
public java.lang.String getDnsVerificationIpInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pdpScopeInput`<sup>Optional</sup> <a name="pdpScopeInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.pdpScopeInput"></a>

```java
public java.lang.String getPdpScopeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsVerificationIp`<sup>Required</sup> <a name="dnsVerificationIp" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.dnsVerificationIp"></a>

```java
public java.lang.String getDnsVerificationIp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pdpScope`<sup>Required</sup> <a name="pdpScope" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.pdpScope"></a>

```java
public java.lang.String getPdpScope();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefix.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePublicAdvertisedPrefixConfig <a name="GoogleComputePublicAdvertisedPrefixConfig" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_advertised_prefix.GoogleComputePublicAdvertisedPrefixConfig;

GoogleComputePublicAdvertisedPrefixConfig.builder()
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
    .dnsVerificationIp(java.lang.String)
    .ipCidrRange(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .pdpScope(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputePublicAdvertisedPrefixTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp">dnsVerificationIp</a></code> | <code>java.lang.String</code> | The IPv4 address to be used for reverse DNS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IPv4 address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#id GoogleComputePublicAdvertisedPrefix#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.pdpScope">pdpScope</a></code> | <code>java.lang.String</code> | Specifies how child public delegated prefix will be scoped. pdpScope must be one of: GLOBAL, REGIONAL Possible values: ["GLOBAL", "REGIONAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#project GoogleComputePublicAdvertisedPrefix#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsVerificationIp`<sup>Required</sup> <a name="dnsVerificationIp" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp"></a>

```java
public java.lang.String getDnsVerificationIp();
```

- *Type:* java.lang.String

The IPv4 address to be used for reverse DNS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#dns_verification_ip GoogleComputePublicAdvertisedPrefix#dns_verification_ip}

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IPv4 address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#ip_cidr_range GoogleComputePublicAdvertisedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#name GoogleComputePublicAdvertisedPrefix#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#description GoogleComputePublicAdvertisedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#id GoogleComputePublicAdvertisedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdpScope`<sup>Optional</sup> <a name="pdpScope" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.pdpScope"></a>

```java
public java.lang.String getPdpScope();
```

- *Type:* java.lang.String

Specifies how child public delegated prefix will be scoped. pdpScope must be one of: GLOBAL, REGIONAL Possible values: ["GLOBAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#pdp_scope GoogleComputePublicAdvertisedPrefix#pdp_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#project GoogleComputePublicAdvertisedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixConfig.property.timeouts"></a>

```java
public GoogleComputePublicAdvertisedPrefixTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#timeouts GoogleComputePublicAdvertisedPrefix#timeouts}

---

### GoogleComputePublicAdvertisedPrefixTimeouts <a name="GoogleComputePublicAdvertisedPrefixTimeouts" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_advertised_prefix.GoogleComputePublicAdvertisedPrefixTimeouts;

GoogleComputePublicAdvertisedPrefixTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#create GoogleComputePublicAdvertisedPrefix#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#delete GoogleComputePublicAdvertisedPrefix#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#create GoogleComputePublicAdvertisedPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_public_advertised_prefix#delete GoogleComputePublicAdvertisedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference <a name="GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_public_advertised_prefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference;

new GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePublicAdvertisedPrefix.GoogleComputePublicAdvertisedPrefixTimeouts">GoogleComputePublicAdvertisedPrefixTimeouts</a>

---



