# `googleIntegrationsAuthConfig` Submodule <a name="`googleIntegrationsAuthConfig` Submodule" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationsAuthConfig <a name="GoogleIntegrationsAuthConfig" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config google_integrations_auth_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfig(Construct Scope, string Id, GoogleIntegrationsAuthConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig">GoogleIntegrationsAuthConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig">GoogleIntegrationsAuthConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate">PutClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential">PutDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDecryptedCredential">ResetDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetExpiryNotificationDuration">ResetExpiryNotificationDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideValidTime">ResetOverrideValidTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientCertificate` <a name="PutClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate"></a>

```csharp
private void PutClientCertificate(GoogleIntegrationsAuthConfigClientCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

---

##### `PutDecryptedCredential` <a name="PutDecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential"></a>

```csharp
private void PutDecryptedCredential(GoogleIntegrationsAuthConfigDecryptedCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIntegrationsAuthConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

---

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetDecryptedCredential` <a name="ResetDecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDecryptedCredential"></a>

```csharp
private void ResetDecryptedCredential()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpiryNotificationDuration` <a name="ResetExpiryNotificationDuration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetExpiryNotificationDuration"></a>

```csharp
private void ResetExpiryNotificationDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOverrideValidTime` <a name="ResetOverrideValidTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideValidTime"></a>

```csharp
private void ResetOverrideValidTime()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIntegrationsAuthConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIntegrationsAuthConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIntegrationsAuthConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIntegrationsAuthConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIntegrationsAuthConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIntegrationsAuthConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIntegrationsAuthConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIntegrationsAuthConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationsAuthConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificate">ClientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference">GoogleIntegrationsAuthConfigClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.creatorEmail">CreatorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredential">DecryptedCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.encryptedCredential">EncryptedCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lastModifierEmail">LastModifierEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference">GoogleIntegrationsAuthConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.validTime">ValidTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificateInput">ClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredentialInput">DecryptedCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDurationInput">ExpiryNotificationDurationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTimeInput">OverrideValidTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDuration">ExpiryNotificationDuration</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTime">OverrideValidTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificate"></a>

```csharp
public GoogleIntegrationsAuthConfigClientCertificateOutputReference ClientCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference">GoogleIntegrationsAuthConfigClientCertificateOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreatorEmail`<sup>Required</sup> <a name="CreatorEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.creatorEmail"></a>

```csharp
public string CreatorEmail { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `DecryptedCredential`<sup>Required</sup> <a name="DecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredential"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference DecryptedCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference</a>

---

##### `EncryptedCredential`<sup>Required</sup> <a name="EncryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.encryptedCredential"></a>

```csharp
public string EncryptedCredential { get; }
```

- *Type:* string

---

##### `LastModifierEmail`<sup>Required</sup> <a name="LastModifierEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lastModifierEmail"></a>

```csharp
public string LastModifierEmail { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeouts"></a>

```csharp
public GoogleIntegrationsAuthConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference">GoogleIntegrationsAuthConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ValidTime`<sup>Required</sup> <a name="ValidTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.validTime"></a>

```csharp
public string ValidTime { get; }
```

- *Type:* string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificateInput"></a>

```csharp
public GoogleIntegrationsAuthConfigClientCertificate ClientCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

---

##### `DecryptedCredentialInput`<sup>Optional</sup> <a name="DecryptedCredentialInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredentialInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredential DecryptedCredentialInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExpiryNotificationDurationInput`<sup>Optional</sup> <a name="ExpiryNotificationDurationInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDurationInput"></a>

```csharp
public string[] ExpiryNotificationDurationInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OverrideValidTimeInput`<sup>Optional</sup> <a name="OverrideValidTimeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTimeInput"></a>

```csharp
public string OverrideValidTimeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExpiryNotificationDuration`<sup>Required</sup> <a name="ExpiryNotificationDuration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDuration"></a>

```csharp
public string[] ExpiryNotificationDuration { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OverrideValidTime`<sup>Required</sup> <a name="OverrideValidTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTime"></a>

```csharp
public string OverrideValidTime { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationsAuthConfigClientCertificate <a name="GoogleIntegrationsAuthConfigClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigClientCertificate {
    string EncryptedPrivateKey,
    string SslCertificate,
    string Passphrase = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey">EncryptedPrivateKey</a></code> | <code>string</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.sslCertificate">SslCertificate</a></code> | <code>string</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.passphrase">Passphrase</a></code> | <code>string</code> | 'passphrase' should be left unset if private key is not encrypted. |

---

##### `EncryptedPrivateKey`<sup>Required</sup> <a name="EncryptedPrivateKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey"></a>

```csharp
public string EncryptedPrivateKey { get; set; }
```

- *Type:* string

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#encrypted_private_key GoogleIntegrationsAuthConfig#encrypted_private_key}

---

##### `SslCertificate`<sup>Required</sup> <a name="SslCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.sslCertificate"></a>

```csharp
public string SslCertificate { get; set; }
```

- *Type:* string

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#ssl_certificate GoogleIntegrationsAuthConfig#ssl_certificate}

---

##### `Passphrase`<sup>Optional</sup> <a name="Passphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.passphrase"></a>

```csharp
public string Passphrase { get; set; }
```

- *Type:* string

'passphrase' should be left unset if private key is not encrypted.

Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#passphrase GoogleIntegrationsAuthConfig#passphrase}

---

### GoogleIntegrationsAuthConfigConfig <a name="GoogleIntegrationsAuthConfigConfig" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    GoogleIntegrationsAuthConfigClientCertificate ClientCertificate = null,
    GoogleIntegrationsAuthConfigDecryptedCredential DecryptedCredential = null,
    string Description = null,
    string[] ExpiryNotificationDuration = null,
    string Id = null,
    string OverrideValidTime = null,
    string Project = null,
    GoogleIntegrationsAuthConfigTimeouts Timeouts = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The name of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.location">Location</a></code> | <code>string</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.clientCertificate">ClientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.decryptedCredential">DecryptedCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | decrypted_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.description">Description</a></code> | <code>string</code> | A description of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.expiryNotificationDuration">ExpiryNotificationDuration</a></code> | <code>string[]</code> | User can define the time to receive notification after which the auth config becomes invalid. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.overrideValidTime">OverrideValidTime</a></code> | <code>string</code> | User provided expiry time to override. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.visibility">Visibility</a></code> | <code>string</code> | The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#display_name GoogleIntegrationsAuthConfig#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#location GoogleIntegrationsAuthConfig#location}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.clientCertificate"></a>

```csharp
public GoogleIntegrationsAuthConfigClientCertificate ClientCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#client_certificate GoogleIntegrationsAuthConfig#client_certificate}

---

##### `DecryptedCredential`<sup>Optional</sup> <a name="DecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.decryptedCredential"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredential DecryptedCredential { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

decrypted_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#decrypted_credential GoogleIntegrationsAuthConfig#decrypted_credential}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#description GoogleIntegrationsAuthConfig#description}

---

##### `ExpiryNotificationDuration`<sup>Optional</sup> <a name="ExpiryNotificationDuration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.expiryNotificationDuration"></a>

```csharp
public string[] ExpiryNotificationDuration { get; set; }
```

- *Type:* string[]

User can define the time to receive notification after which the auth config becomes invalid.

Support up to 30 days. Support granularity in hours.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#expiry_notification_duration GoogleIntegrationsAuthConfig#expiry_notification_duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OverrideValidTime`<sup>Optional</sup> <a name="OverrideValidTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.overrideValidTime"></a>

```csharp
public string OverrideValidTime { get; set; }
```

- *Type:* string

User provided expiry time to override.

For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#override_valid_time GoogleIntegrationsAuthConfig#override_valid_time}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.timeouts"></a>

```csharp
public GoogleIntegrationsAuthConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#timeouts GoogleIntegrationsAuthConfig#timeouts}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#visibility GoogleIntegrationsAuthConfig#visibility}

---

### GoogleIntegrationsAuthConfigDecryptedCredential <a name="GoogleIntegrationsAuthConfigDecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredential {
    string CredentialType,
    GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken AuthToken = null,
    GoogleIntegrationsAuthConfigDecryptedCredentialJwt Jwt = null,
    GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode Oauth2AuthorizationCode = null,
    GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials Oauth2ClientCredentials = null,
    GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken OidcToken = null,
    GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials ServiceAccountCredentials = null,
    GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword UsernameAndPassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.credentialType">CredentialType</a></code> | <code>string</code> | Credential type associated with auth configs. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.authToken">AuthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.jwt">Jwt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | jwt block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode">Oauth2AuthorizationCode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | oauth2_authorization_code block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials">Oauth2ClientCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | oauth2_client_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials">ServiceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword">UsernameAndPassword</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | username_and_password block. |

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Credential type associated with auth configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#credential_type GoogleIntegrationsAuthConfig#credential_type}

---

##### `AuthToken`<sup>Optional</sup> <a name="AuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.authToken"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken AuthToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#auth_token GoogleIntegrationsAuthConfig#auth_token}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.jwt"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialJwt Jwt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#jwt GoogleIntegrationsAuthConfig#jwt}

---

##### `Oauth2AuthorizationCode`<sup>Optional</sup> <a name="Oauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode Oauth2AuthorizationCode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

oauth2_authorization_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#oauth2_authorization_code GoogleIntegrationsAuthConfig#oauth2_authorization_code}

---

##### `Oauth2ClientCredentials`<sup>Optional</sup> <a name="Oauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials Oauth2ClientCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#oauth2_client_credentials GoogleIntegrationsAuthConfig#oauth2_client_credentials}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oidcToken"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken OidcToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#oidc_token GoogleIntegrationsAuthConfig#oidc_token}

---

##### `ServiceAccountCredentials`<sup>Optional</sup> <a name="ServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials ServiceAccountCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#service_account_credentials GoogleIntegrationsAuthConfig#service_account_credentials}

---

##### `UsernameAndPassword`<sup>Optional</sup> <a name="UsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword UsernameAndPassword { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

username_and_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#username_and_password GoogleIntegrationsAuthConfig#username_and_password}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken <a name="GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken {
    string Token = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.token">Token</a></code> | <code>string</code> | The token for the auth type. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.type">Type</a></code> | <code>string</code> | Authentication type, e.g. "Basic", "Bearer", etc. |

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The token for the auth type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#token GoogleIntegrationsAuthConfig#token}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Authentication type, e.g. "Basic", "Bearer", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#type GoogleIntegrationsAuthConfig#type}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialJwt <a name="GoogleIntegrationsAuthConfigDecryptedCredentialJwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialJwt {
    string JwtHeader = null,
    string JwtPayload = null,
    string Secret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader">JwtHeader</a></code> | <code>string</code> | Identifies which algorithm is used to generate the signature. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload">JwtPayload</a></code> | <code>string</code> | Contains a set of claims. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.secret">Secret</a></code> | <code>string</code> | User's pre-shared secret to sign the token. |

---

##### `JwtHeader`<sup>Optional</sup> <a name="JwtHeader" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader"></a>

```csharp
public string JwtHeader { get; set; }
```

- *Type:* string

Identifies which algorithm is used to generate the signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#jwt_header GoogleIntegrationsAuthConfig#jwt_header}

---

##### `JwtPayload`<sup>Optional</sup> <a name="JwtPayload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload"></a>

```csharp
public string JwtPayload { get; set; }
```

- *Type:* string

Contains a set of claims.

The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#jwt_payload GoogleIntegrationsAuthConfig#jwt_payload}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

User's pre-shared secret to sign the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#secret GoogleIntegrationsAuthConfig#secret}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode {
    string AuthEndpoint = null,
    string ClientId = null,
    string ClientSecret = null,
    string Scope = null,
    string TokenEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint">AuthEndpoint</a></code> | <code>string</code> | The auth url endpoint to send the auth code request to. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId">ClientId</a></code> | <code>string</code> | The client's id. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope">Scope</a></code> | <code>string</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token url endpoint to send the token request to. |

---

##### `AuthEndpoint`<sup>Optional</sup> <a name="AuthEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint"></a>

```csharp
public string AuthEndpoint { get; set; }
```

- *Type:* string

The auth url endpoint to send the auth code request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#auth_endpoint GoogleIntegrationsAuthConfig#auth_endpoint}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client's id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#client_id GoogleIntegrationsAuthConfig#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#client_secret GoogleIntegrationsAuthConfig#client_secret}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token url endpoint to send the token request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#token_endpoint GoogleIntegrationsAuthConfig#token_endpoint}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials {
    string ClientId = null,
    string ClientSecret = null,
    string RequestType = null,
    string Scope = null,
    string TokenEndpoint = null,
    GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams TokenParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId">ClientId</a></code> | <code>string</code> | The client's ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType">RequestType</a></code> | <code>string</code> | Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope">Scope</a></code> | <code>string</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams">TokenParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | token_params block. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#client_id GoogleIntegrationsAuthConfig#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#client_secret GoogleIntegrationsAuthConfig#client_secret}

---

##### `RequestType`<sup>Optional</sup> <a name="RequestType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType"></a>

```csharp
public string RequestType { get; set; }
```

- *Type:* string

Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#request_type GoogleIntegrationsAuthConfig#request_type}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#token_endpoint GoogleIntegrationsAuthConfig#token_endpoint}

---

##### `TokenParams`<sup>Optional</sup> <a name="TokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams TokenParams { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

token_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#token_params GoogleIntegrationsAuthConfig#token_params}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams {
    object Entries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries">Entries</a></code> | <code>object</code> | entries block. |

---

##### `Entries`<sup>Optional</sup> <a name="Entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries"></a>

```csharp
public object Entries { get; set; }
```

- *Type:* object

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#entries GoogleIntegrationsAuthConfig#entries}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries {
    GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey Key = null,
    GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key">Key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | key block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | value block. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey Key { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#key GoogleIntegrationsAuthConfig#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue Value { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#value GoogleIntegrationsAuthConfig#value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey {
    GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue LiteralValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue">LiteralValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | literal_value block. |

---

##### `LiteralValue`<sup>Optional</sup> <a name="LiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue LiteralValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#literal_value GoogleIntegrationsAuthConfig#literal_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue {
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue">StringValue</a></code> | <code>string</code> | String. |

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#string_value GoogleIntegrationsAuthConfig#string_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue {
    GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue LiteralValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue">LiteralValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | literal_value block. |

---

##### `LiteralValue`<sup>Optional</sup> <a name="LiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue LiteralValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#literal_value GoogleIntegrationsAuthConfig#literal_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue {
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue">StringValue</a></code> | <code>string</code> | String. |

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#string_value GoogleIntegrationsAuthConfig#string_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken {
    string Audience = null,
    string ServiceAccountEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience">Audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | The service account email to be used as the identity for the token. |

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience to be used when generating OIDC token.

The audience claim identifies the recipients that the JWT is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#audience GoogleIntegrationsAuthConfig#audience}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

The service account email to be used as the identity for the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#service_account_email GoogleIntegrationsAuthConfig#service_account_email}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials <a name="GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials {
    string Scope = null,
    string ServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope">Scope</a></code> | <code>string</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Name of the service account that has the permission to make the request. |

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Name of the service account that has the permission to make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#service_account GoogleIntegrationsAuthConfig#service_account}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword <a name="GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword {
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password">Password</a></code> | <code>string</code> | Password to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username">Username</a></code> | <code>string</code> | Username to be used. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#password GoogleIntegrationsAuthConfig#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#username GoogleIntegrationsAuthConfig#username}

---

### GoogleIntegrationsAuthConfigTimeouts <a name="GoogleIntegrationsAuthConfigTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#create GoogleIntegrationsAuthConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#delete GoogleIntegrationsAuthConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#update GoogleIntegrationsAuthConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#create GoogleIntegrationsAuthConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#delete GoogleIntegrationsAuthConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_integrations_auth_config#update GoogleIntegrationsAuthConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationsAuthConfigClientCertificateOutputReference <a name="GoogleIntegrationsAuthConfigClientCertificateOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigClientCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase">ResetPassphrase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassphrase` <a name="ResetPassphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase"></a>

```csharp
private void ResetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput">EncryptedPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput">PassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput">SslCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey">EncryptedPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate">SslCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptedPrivateKeyInput`<sup>Optional</sup> <a name="EncryptedPrivateKeyInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput"></a>

```csharp
public string EncryptedPrivateKeyInput { get; }
```

- *Type:* string

---

##### `PassphraseInput`<sup>Optional</sup> <a name="PassphraseInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput"></a>

```csharp
public string PassphraseInput { get; }
```

- *Type:* string

---

##### `SslCertificateInput`<sup>Optional</sup> <a name="SslCertificateInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput"></a>

```csharp
public string SslCertificateInput { get; }
```

- *Type:* string

---

##### `EncryptedPrivateKey`<sup>Required</sup> <a name="EncryptedPrivateKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey"></a>

```csharp
public string EncryptedPrivateKey { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `SslCertificate`<sup>Required</sup> <a name="SslCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate"></a>

```csharp
public string SslCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigClientCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader">ResetJwtHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload">ResetJwtPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJwtHeader` <a name="ResetJwtHeader" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader"></a>

```csharp
private void ResetJwtHeader()
```

##### `ResetJwtPayload` <a name="ResetJwtPayload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload"></a>

```csharp
private void ResetJwtPayload()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt">Jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput">JwtHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput">JwtPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader">JwtHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload">JwtPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt"></a>

```csharp
public string Jwt { get; }
```

- *Type:* string

---

##### `JwtHeaderInput`<sup>Optional</sup> <a name="JwtHeaderInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput"></a>

```csharp
public string JwtHeaderInput { get; }
```

- *Type:* string

---

##### `JwtPayloadInput`<sup>Optional</sup> <a name="JwtPayloadInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput"></a>

```csharp
public string JwtPayloadInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `JwtHeader`<sup>Required</sup> <a name="JwtHeader" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader"></a>

```csharp
public string JwtHeader { get; }
```

- *Type:* string

---

##### `JwtPayload`<sup>Required</sup> <a name="JwtPayload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload"></a>

```csharp
public string JwtPayload { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialJwt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint">ResetAuthEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthEndpoint` <a name="ResetAuthEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint"></a>

```csharp
private void ResetAuthEndpoint()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint"></a>

```csharp
private void ResetTokenEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput">AuthEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint">AuthEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthEndpointInput`<sup>Optional</sup> <a name="AuthEndpointInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput"></a>

```csharp
public string AuthEndpointInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `AuthEndpoint`<sup>Required</sup> <a name="AuthEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint"></a>

```csharp
public string AuthEndpoint { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams">PutTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType">ResetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams">ResetTokenParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTokenParams` <a name="PutTokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams"></a>

```csharp
private void PutTokenParams(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetRequestType` <a name="ResetRequestType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType"></a>

```csharp
private void ResetRequestType()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint"></a>

```csharp
private void ResetTokenEndpoint()
```

##### `ResetTokenParams` <a name="ResetTokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams"></a>

```csharp
private void ResetTokenParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams">TokenParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput">RequestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput">TokenParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType">RequestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TokenParams`<sup>Required</sup> <a name="TokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference TokenParams { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `RequestTypeInput`<sup>Optional</sup> <a name="RequestTypeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput"></a>

```csharp
public string RequestTypeInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `TokenParamsInput`<sup>Optional</sup> <a name="TokenParamsInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams TokenParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType"></a>

```csharp
public string RequestType { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue">PutLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue">ResetLiteralValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLiteralValue` <a name="PutLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue"></a>

```csharp
private void PutLiteralValue(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `ResetLiteralValue` <a name="ResetLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue"></a>

```csharp
private void ResetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue">LiteralValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput">LiteralValueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LiteralValue`<sup>Required</sup> <a name="LiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference LiteralValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a>

---

##### `LiteralValueInput`<sup>Optional</sup> <a name="LiteralValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue LiteralValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get"></a>

```csharp
private GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey">PutKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKey` <a name="PutKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey"></a>

```csharp
private void PutKey(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `PutValue` <a name="PutValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue"></a>

```csharp
private void PutValue(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key">Key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput">KeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference Key { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey KeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue ValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue">PutLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue">ResetLiteralValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLiteralValue` <a name="PutLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue"></a>

```csharp
private void PutLiteralValue(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `ResetLiteralValue` <a name="ResetLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue"></a>

```csharp
private void ResetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue">LiteralValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput">LiteralValueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LiteralValue`<sup>Required</sup> <a name="LiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference LiteralValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a>

---

##### `LiteralValueInput`<sup>Optional</sup> <a name="LiteralValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue LiteralValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries">PutEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries">ResetEntries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntries` <a name="PutEntries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries"></a>

```csharp
private void PutEntries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries.parameter.value"></a>

- *Type:* object

---

##### `ResetEntries` <a name="ResetEntries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries"></a>

```csharp
private void ResetEntries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries">Entries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput">EntriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a>

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput"></a>

```csharp
public object EntriesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime">TokenExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `TokenExpireTime`<sup>Required</sup> <a name="TokenExpireTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime"></a>

```csharp
public string TokenExpireTime { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken">PutAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt">PutJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode">PutOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials">PutOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials">PutServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword">PutUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken">ResetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt">ResetJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode">ResetOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials">ResetOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials">ResetServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword">ResetUsernameAndPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthToken` <a name="PutAuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken"></a>

```csharp
private void PutAuthToken(GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `PutJwt` <a name="PutJwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt"></a>

```csharp
private void PutJwt(GoogleIntegrationsAuthConfigDecryptedCredentialJwt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `PutOauth2AuthorizationCode` <a name="PutOauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode"></a>

```csharp
private void PutOauth2AuthorizationCode(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `PutOauth2ClientCredentials` <a name="PutOauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials"></a>

```csharp
private void PutOauth2ClientCredentials(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken"></a>

```csharp
private void PutOidcToken(GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `PutServiceAccountCredentials` <a name="PutServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials"></a>

```csharp
private void PutServiceAccountCredentials(GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `PutUsernameAndPassword` <a name="PutUsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword"></a>

```csharp
private void PutUsernameAndPassword(GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `ResetAuthToken` <a name="ResetAuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken"></a>

```csharp
private void ResetAuthToken()
```

##### `ResetJwt` <a name="ResetJwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt"></a>

```csharp
private void ResetJwt()
```

##### `ResetOauth2AuthorizationCode` <a name="ResetOauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode"></a>

```csharp
private void ResetOauth2AuthorizationCode()
```

##### `ResetOauth2ClientCredentials` <a name="ResetOauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials"></a>

```csharp
private void ResetOauth2ClientCredentials()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken"></a>

```csharp
private void ResetOidcToken()
```

##### `ResetServiceAccountCredentials` <a name="ResetServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials"></a>

```csharp
private void ResetServiceAccountCredentials()
```

##### `ResetUsernameAndPassword` <a name="ResetUsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword"></a>

```csharp
private void ResetUsernameAndPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken">AuthToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt">Jwt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode">Oauth2AuthorizationCode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials">Oauth2ClientCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials">ServiceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword">UsernameAndPassword</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput">AuthTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput">JwtInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput">Oauth2AuthorizationCodeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput">Oauth2ClientCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput">ServiceAccountCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput">UsernameAndPasswordInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference AuthToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a>

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference Jwt { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a>

---

##### `Oauth2AuthorizationCode`<sup>Required</sup> <a name="Oauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference Oauth2AuthorizationCode { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a>

---

##### `Oauth2ClientCredentials`<sup>Required</sup> <a name="Oauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference Oauth2ClientCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference OidcToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a>

---

##### `ServiceAccountCredentials`<sup>Required</sup> <a name="ServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference ServiceAccountCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a>

---

##### `UsernameAndPassword`<sup>Required</sup> <a name="UsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference UsernameAndPassword { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a>

---

##### `AuthTokenInput`<sup>Optional</sup> <a name="AuthTokenInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken AuthTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `JwtInput`<sup>Optional</sup> <a name="JwtInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialJwt JwtInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `Oauth2AuthorizationCodeInput`<sup>Optional</sup> <a name="Oauth2AuthorizationCodeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode Oauth2AuthorizationCodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `Oauth2ClientCredentialsInput`<sup>Optional</sup> <a name="Oauth2ClientCredentialsInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials Oauth2ClientCredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken OidcTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `ServiceAccountCredentialsInput`<sup>Optional</sup> <a name="ServiceAccountCredentialsInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials ServiceAccountCredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `UsernameAndPasswordInput`<sup>Optional</sup> <a name="UsernameAndPasswordInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword UsernameAndPasswordInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue"></a>

```csharp
public GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---


### GoogleIntegrationsAuthConfigTimeoutsOutputReference <a name="GoogleIntegrationsAuthConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIntegrationsAuthConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



