# `googleBeyondcorpSecurityGatewayApplication` Submodule <a name="`googleBeyondcorpSecurityGatewayApplication` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGatewayApplication <a name="GoogleBeyondcorpSecurityGatewayApplication" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .endpointMatchers(IResolvable)
    .endpointMatchers(java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers>)
    .securityGatewayId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBeyondcorpSecurityGatewayApplicationTimeouts)
//  .upstreams(IResolvable)
//  .upstreams(java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | User-settable Application resource ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.endpointMatchers">endpointMatchers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.upstreams">upstreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | upstreams block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#application_id GoogleBeyondcorpSecurityGatewayApplication#application_id}

---

##### `endpointMatchers`<sup>Required</sup> <a name="endpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.endpointMatchers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#endpoint_matchers GoogleBeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.securityGatewayId"></a>

- *Type:* java.lang.String

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#security_gateway_id GoogleBeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#display_name GoogleBeyondcorpSecurityGatewayApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#timeouts GoogleBeyondcorpSecurityGatewayApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.upstreams"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#upstreams GoogleBeyondcorpSecurityGatewayApplication#upstreams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers">putEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetUpstreams">resetUpstreams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointMatchers` <a name="putEndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers"></a>

```java
public void putEndpointMatchers(IResolvable OR java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts"></a>

```java
public void putTimeouts(GoogleBeyondcorpSecurityGatewayApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `putUpstreams` <a name="putUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams"></a>

```java
public void putUpstreams(IResolvable OR java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpstreams` <a name="resetUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetUpstreams"></a>

```java
public void resetUpstreams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBeyondcorpSecurityGatewayApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchers">endpointMatchers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreams">upstreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchersInput">endpointMatchersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreamsInput">upstreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endpointMatchers`<sup>Required</sup> <a name="endpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchers"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList getEndpointMatchers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeouts"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreams"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList getUpstreams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endpointMatchersInput`<sup>Optional</sup> <a name="endpointMatchersInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchersInput"></a>

```java
public java.lang.Object getEndpointMatchersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput"></a>

```java
public java.lang.String getSecurityGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreamsInput"></a>

```java
public java.lang.Object getUpstreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationConfig <a name="GoogleBeyondcorpSecurityGatewayApplicationConfig" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationConfig;

GoogleBeyondcorpSecurityGatewayApplicationConfig.builder()
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
    .applicationId(java.lang.String)
    .endpointMatchers(IResolvable)
    .endpointMatchers(java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers>)
    .securityGatewayId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBeyondcorpSecurityGatewayApplicationTimeouts)
//  .upstreams(IResolvable)
//  .upstreams(java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | User-settable Application resource ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers">endpointMatchers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.upstreams">upstreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | upstreams block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#application_id GoogleBeyondcorpSecurityGatewayApplication#application_id}

---

##### `endpointMatchers`<sup>Required</sup> <a name="endpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers"></a>

```java
public java.lang.Object getEndpointMatchers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#endpoint_matchers GoogleBeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#security_gateway_id GoogleBeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#display_name GoogleBeyondcorpSecurityGatewayApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.timeouts"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#timeouts GoogleBeyondcorpSecurityGatewayApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.upstreams"></a>

```java
public java.lang.Object getUpstreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#upstreams GoogleBeyondcorpSecurityGatewayApplication#upstreams}

---

### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers;

GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.builder()
    .hostname(java.lang.String)
//  .ports(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Required. Hostname of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Optional. Ports of the application. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#hostname GoogleBeyondcorpSecurityGatewayApplication#hostname}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#ports GoogleBeyondcorpSecurityGatewayApplication#ports}

---

### GoogleBeyondcorpSecurityGatewayApplicationTimeouts <a name="GoogleBeyondcorpSecurityGatewayApplicationTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationTimeouts;

GoogleBeyondcorpSecurityGatewayApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}.

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreams <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreams" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreams;

GoogleBeyondcorpSecurityGatewayApplicationUpstreams.builder()
//  .egressPolicy(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy)
//  .network(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy">egressPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.network">network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | network block. |

---

##### `egressPolicy`<sup>Optional</sup> <a name="egressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getEgressPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#egress_policy GoogleBeyondcorpSecurityGatewayApplication#egress_policy}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.network"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#network GoogleBeyondcorpSecurityGatewayApplication#network}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.builder()
    .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Required. List of regions where the application sends traffic to. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#regions GoogleBeyondcorpSecurityGatewayApplication#regions}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name">name</a></code> | <code>java.lang.String</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_beyondcorp_security_gateway_application#name GoogleBeyondcorpSecurityGatewayApplication#name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList;

new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---


### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy">putEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy">resetEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressPolicy` <a name="putEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```java
public void putEgressPolicy(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork"></a>

```java
public void putNetwork(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `resetEgressPolicy` <a name="resetEgressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```java
public void resetEgressPolicy()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy">egressPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput">egressPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressPolicy`<sup>Required</sup> <a name="egressPolicy" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference getEgressPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a>

---

##### `egressPolicyInput`<sup>Optional</sup> <a name="egressPolicyInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getEgressPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>

---



