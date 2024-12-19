# `googleIdentityPlatformTenant` Submodule <a name="`googleIdentityPlatformTenant` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenant <a name="GoogleIdentityPlatformTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant google_identity_platform_tenant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_tenant.GoogleIdentityPlatformTenant;

GoogleIdentityPlatformTenant.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
//  .allowPasswordSignup(java.lang.Boolean)
//  .allowPasswordSignup(IResolvable)
//  .disableAuth(java.lang.Boolean)
//  .disableAuth(IResolvable)
//  .enableEmailLinkSignin(java.lang.Boolean)
//  .enableEmailLinkSignin(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIdentityPlatformTenantTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.allowPasswordSignup">allowPasswordSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.disableAuth">disableAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.enableEmailLinkSignin">enableEmailLinkSignin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#display_name GoogleIdentityPlatformTenant#display_name}

---

##### `allowPasswordSignup`<sup>Optional</sup> <a name="allowPasswordSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.allowPasswordSignup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#allow_password_signup GoogleIdentityPlatformTenant#allow_password_signup}

---

##### `disableAuth`<sup>Optional</sup> <a name="disableAuth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.disableAuth"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#disable_auth GoogleIdentityPlatformTenant#disable_auth}

---

##### `enableEmailLinkSignin`<sup>Optional</sup> <a name="enableEmailLinkSignin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.enableEmailLinkSignin"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#enable_email_link_signin GoogleIdentityPlatformTenant#enable_email_link_signin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#timeouts GoogleIdentityPlatformTenant#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetAllowPasswordSignup">resetAllowPasswordSignup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDisableAuth">resetDisableAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetEnableEmailLinkSignin">resetEnableEmailLinkSignin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts"></a>

```java
public void putTimeouts(GoogleIdentityPlatformTenantTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

---

##### `resetAllowPasswordSignup` <a name="resetAllowPasswordSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetAllowPasswordSignup"></a>

```java
public void resetAllowPasswordSignup()
```

##### `resetDisableAuth` <a name="resetDisableAuth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDisableAuth"></a>

```java
public void resetDisableAuth()
```

##### `resetEnableEmailLinkSignin` <a name="resetEnableEmailLinkSignin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetEnableEmailLinkSignin"></a>

```java
public void resetEnableEmailLinkSignin()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformTenant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_tenant.GoogleIdentityPlatformTenant;

GoogleIdentityPlatformTenant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_tenant.GoogleIdentityPlatformTenant;

GoogleIdentityPlatformTenant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_tenant.GoogleIdentityPlatformTenant;

GoogleIdentityPlatformTenant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_tenant.GoogleIdentityPlatformTenant;

GoogleIdentityPlatformTenant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIdentityPlatformTenant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIdentityPlatformTenant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIdentityPlatformTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIdentityPlatformTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference">GoogleIdentityPlatformTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignupInput">allowPasswordSignupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuthInput">disableAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSigninInput">enableEmailLinkSigninInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignup">allowPasswordSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuth">disableAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSignin">enableEmailLinkSignin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeouts"></a>

```java
public GoogleIdentityPlatformTenantTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference">GoogleIdentityPlatformTenantTimeoutsOutputReference</a>

---

##### `allowPasswordSignupInput`<sup>Optional</sup> <a name="allowPasswordSignupInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignupInput"></a>

```java
public java.lang.Object getAllowPasswordSignupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableAuthInput`<sup>Optional</sup> <a name="disableAuthInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuthInput"></a>

```java
public java.lang.Object getDisableAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableEmailLinkSigninInput`<sup>Optional</sup> <a name="enableEmailLinkSigninInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSigninInput"></a>

```java
public java.lang.Object getEnableEmailLinkSigninInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

---

##### `allowPasswordSignup`<sup>Required</sup> <a name="allowPasswordSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignup"></a>

```java
public java.lang.Object getAllowPasswordSignup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableAuth`<sup>Required</sup> <a name="disableAuth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuth"></a>

```java
public java.lang.Object getDisableAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableEmailLinkSignin`<sup>Required</sup> <a name="enableEmailLinkSignin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSignin"></a>

```java
public java.lang.Object getEnableEmailLinkSignin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantConfig <a name="GoogleIdentityPlatformTenantConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_tenant.GoogleIdentityPlatformTenantConfig;

GoogleIdentityPlatformTenantConfig.builder()
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
    .displayName(java.lang.String)
//  .allowPasswordSignup(java.lang.Boolean)
//  .allowPasswordSignup(IResolvable)
//  .disableAuth(java.lang.Boolean)
//  .disableAuth(IResolvable)
//  .enableEmailLinkSignin(java.lang.Boolean)
//  .enableEmailLinkSignin(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIdentityPlatformTenantTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.allowPasswordSignup">allowPasswordSignup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.disableAuth">disableAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.enableEmailLinkSignin">enableEmailLinkSignin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#display_name GoogleIdentityPlatformTenant#display_name}

---

##### `allowPasswordSignup`<sup>Optional</sup> <a name="allowPasswordSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.allowPasswordSignup"></a>

```java
public java.lang.Object getAllowPasswordSignup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#allow_password_signup GoogleIdentityPlatformTenant#allow_password_signup}

---

##### `disableAuth`<sup>Optional</sup> <a name="disableAuth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.disableAuth"></a>

```java
public java.lang.Object getDisableAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#disable_auth GoogleIdentityPlatformTenant#disable_auth}

---

##### `enableEmailLinkSignin`<sup>Optional</sup> <a name="enableEmailLinkSignin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.enableEmailLinkSignin"></a>

```java
public java.lang.Object getEnableEmailLinkSignin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#enable_email_link_signin GoogleIdentityPlatformTenant#enable_email_link_signin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.timeouts"></a>

```java
public GoogleIdentityPlatformTenantTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#timeouts GoogleIdentityPlatformTenant#timeouts}

---

### GoogleIdentityPlatformTenantTimeouts <a name="GoogleIdentityPlatformTenantTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_tenant.GoogleIdentityPlatformTenantTimeouts;

GoogleIdentityPlatformTenantTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_tenant.GoogleIdentityPlatformTenantTimeoutsOutputReference;

new GoogleIdentityPlatformTenantTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

---



