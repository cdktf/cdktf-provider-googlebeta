# `googleActiveDirectoryDomain` Submodule <a name="`googleActiveDirectoryDomain` Submodule" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleActiveDirectoryDomain <a name="GoogleActiveDirectoryDomain" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain google_active_directory_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_active_directory_domain.GoogleActiveDirectoryDomain;

GoogleActiveDirectoryDomain.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
    .locations(java.util.List<java.lang.String>)
    .reservedIpRange(java.lang.String)
//  .admin(java.lang.String)
//  .authorizedNetworks(java.util.List<java.lang.String>)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleActiveDirectoryDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | Locations where domain needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | The CIDR range of internal addresses that are reserved for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.admin">admin</a></code> | <code>java.lang.String</code> | The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.authorizedNetworks">authorizedNetworks</a></code> | <code>java.util.List<java.lang.String></code> | The full names of the Google Compute Engine networks the domain instance is connected to. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the domain. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#id GoogleActiveDirectoryDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#project GoogleActiveDirectoryDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#domain_name GoogleActiveDirectoryDomain#domain_name}

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.locations"></a>

- *Type:* java.util.List<java.lang.String>

Locations where domain needs to be provisioned.

[regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#locations GoogleActiveDirectoryDomain#locations}

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.reservedIpRange"></a>

- *Type:* java.lang.String

The CIDR range of internal addresses that are reserved for this domain.

Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#reserved_ip_range GoogleActiveDirectoryDomain#reserved_ip_range}

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.admin"></a>

- *Type:* java.lang.String

The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#admin GoogleActiveDirectoryDomain#admin}

---

##### `authorizedNetworks`<sup>Optional</sup> <a name="authorizedNetworks" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.authorizedNetworks"></a>

- *Type:* java.util.List<java.lang.String>

The full names of the Google Compute Engine networks the domain instance is connected to.

The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#authorized_networks GoogleActiveDirectoryDomain#authorized_networks}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Terraform will be prevented from destroying the domain.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the domain,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the domain will fail.
When the field is set to false, deleting the domain is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#deletion_protection GoogleActiveDirectoryDomain#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#id GoogleActiveDirectoryDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#labels GoogleActiveDirectoryDomain#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#project GoogleActiveDirectoryDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#timeouts GoogleActiveDirectoryDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetAdmin">resetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetAuthorizedNetworks">resetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.putTimeouts"></a>

```java
public void putTimeouts(GoogleActiveDirectoryDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a>

---

##### `resetAdmin` <a name="resetAdmin" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetAdmin"></a>

```java
public void resetAdmin()
```

##### `resetAuthorizedNetworks` <a name="resetAuthorizedNetworks" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetAuthorizedNetworks"></a>

```java
public void resetAuthorizedNetworks()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleActiveDirectoryDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_active_directory_domain.GoogleActiveDirectoryDomain;

GoogleActiveDirectoryDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_active_directory_domain.GoogleActiveDirectoryDomain;

GoogleActiveDirectoryDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_active_directory_domain.GoogleActiveDirectoryDomain;

GoogleActiveDirectoryDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_active_directory_domain.GoogleActiveDirectoryDomain;

GoogleActiveDirectoryDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleActiveDirectoryDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleActiveDirectoryDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleActiveDirectoryDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleActiveDirectoryDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleActiveDirectoryDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference">GoogleActiveDirectoryDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.adminInput">adminInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.authorizedNetworksInput">authorizedNetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.reservedIpRangeInput">reservedIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.admin">admin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.authorizedNetworks">authorizedNetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.timeouts"></a>

```java
public GoogleActiveDirectoryDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference">GoogleActiveDirectoryDomainTimeoutsOutputReference</a>

---

##### `adminInput`<sup>Optional</sup> <a name="adminInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.adminInput"></a>

```java
public java.lang.String getAdminInput();
```

- *Type:* java.lang.String

---

##### `authorizedNetworksInput`<sup>Optional</sup> <a name="authorizedNetworksInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.authorizedNetworksInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedNetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservedIpRangeInput`<sup>Optional</sup> <a name="reservedIpRangeInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.reservedIpRangeInput"></a>

```java
public java.lang.String getReservedIpRangeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a>

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.admin"></a>

```java
public java.lang.String getAdmin();
```

- *Type:* java.lang.String

---

##### `authorizedNetworks`<sup>Required</sup> <a name="authorizedNetworks" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.authorizedNetworks"></a>

```java
public java.util.List<java.lang.String> getAuthorizedNetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.reservedIpRange"></a>

```java
public java.lang.String getReservedIpRange();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleActiveDirectoryDomainConfig <a name="GoogleActiveDirectoryDomainConfig" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_active_directory_domain.GoogleActiveDirectoryDomainConfig;

GoogleActiveDirectoryDomainConfig.builder()
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
    .domainName(java.lang.String)
    .locations(java.util.List<java.lang.String>)
    .reservedIpRange(java.lang.String)
//  .admin(java.lang.String)
//  .authorizedNetworks(java.util.List<java.lang.String>)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleActiveDirectoryDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | Locations where domain needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | The CIDR range of internal addresses that are reserved for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.admin">admin</a></code> | <code>java.lang.String</code> | The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.authorizedNetworks">authorizedNetworks</a></code> | <code>java.util.List<java.lang.String></code> | The full names of the Google Compute Engine networks the domain instance is connected to. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the domain. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#id GoogleActiveDirectoryDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#project GoogleActiveDirectoryDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#domain_name GoogleActiveDirectoryDomain#domain_name}

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

Locations where domain needs to be provisioned.

[regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#locations GoogleActiveDirectoryDomain#locations}

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.reservedIpRange"></a>

```java
public java.lang.String getReservedIpRange();
```

- *Type:* java.lang.String

The CIDR range of internal addresses that are reserved for this domain.

Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#reserved_ip_range GoogleActiveDirectoryDomain#reserved_ip_range}

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.admin"></a>

```java
public java.lang.String getAdmin();
```

- *Type:* java.lang.String

The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#admin GoogleActiveDirectoryDomain#admin}

---

##### `authorizedNetworks`<sup>Optional</sup> <a name="authorizedNetworks" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.authorizedNetworks"></a>

```java
public java.util.List<java.lang.String> getAuthorizedNetworks();
```

- *Type:* java.util.List<java.lang.String>

The full names of the Google Compute Engine networks the domain instance is connected to.

The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#authorized_networks GoogleActiveDirectoryDomain#authorized_networks}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Terraform will be prevented from destroying the domain.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the domain,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the domain will fail.
When the field is set to false, deleting the domain is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#deletion_protection GoogleActiveDirectoryDomain#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#id GoogleActiveDirectoryDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#labels GoogleActiveDirectoryDomain#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#project GoogleActiveDirectoryDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainConfig.property.timeouts"></a>

```java
public GoogleActiveDirectoryDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#timeouts GoogleActiveDirectoryDomain#timeouts}

---

### GoogleActiveDirectoryDomainTimeouts <a name="GoogleActiveDirectoryDomainTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_active_directory_domain.GoogleActiveDirectoryDomainTimeouts;

GoogleActiveDirectoryDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#create GoogleActiveDirectoryDomain#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#delete GoogleActiveDirectoryDomain#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#update GoogleActiveDirectoryDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#create GoogleActiveDirectoryDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#delete GoogleActiveDirectoryDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_active_directory_domain#update GoogleActiveDirectoryDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleActiveDirectoryDomainTimeoutsOutputReference <a name="GoogleActiveDirectoryDomainTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_active_directory_domain.GoogleActiveDirectoryDomainTimeoutsOutputReference;

new GoogleActiveDirectoryDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomain.GoogleActiveDirectoryDomainTimeouts">GoogleActiveDirectoryDomainTimeouts</a>

---



