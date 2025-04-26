# `googleNetworkSecurityBackendAuthenticationConfig` Submodule <a name="`googleNetworkSecurityBackendAuthenticationConfig` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityBackendAuthenticationConfig <a name="GoogleNetworkSecurityBackendAuthenticationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config google_network_security_backend_authentication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityBackendAuthenticationConfig(Construct Scope, string Id, GoogleNetworkSecurityBackendAuthenticationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig">GoogleNetworkSecurityBackendAuthenticationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig">GoogleNetworkSecurityBackendAuthenticationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots">ResetWellKnownRoots</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityBackendAuthenticationConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

---

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTrustConfig"></a>

```csharp
private void ResetTrustConfig()
```

##### `ResetWellKnownRoots` <a name="ResetWellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots"></a>

```csharp
private void ResetWellKnownRoots()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityBackendAuthenticationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityBackendAuthenticationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityBackendAuthenticationConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityBackendAuthenticationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityBackendAuthenticationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityBackendAuthenticationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityBackendAuthenticationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfigInput">TrustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput">WellKnownRootsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfig">TrustConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots">WellKnownRoots</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfigInput"></a>

```csharp
public string TrustConfigInput { get; }
```

- *Type:* string

---

##### `WellKnownRootsInput`<sup>Optional</sup> <a name="WellKnownRootsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput"></a>

```csharp
public string WellKnownRootsInput { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfig"></a>

```csharp
public string TrustConfig { get; }
```

- *Type:* string

---

##### `WellKnownRoots`<sup>Required</sup> <a name="WellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots"></a>

```csharp
public string WellKnownRoots { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityBackendAuthenticationConfigConfig <a name="GoogleNetworkSecurityBackendAuthenticationConfigConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityBackendAuthenticationConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ClientCertificate = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    GoogleNetworkSecurityBackendAuthenticationConfigTimeouts Timeouts = null,
    string TrustConfig = null,
    string WellKnownRoots = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.name">Name</a></code> | <code>string</code> | Name of the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of the backend authentication config. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig">TrustConfig</a></code> | <code>string</code> | Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots">WellKnownRoots</a></code> | <code>string</code> | Well known roots to use for server certificate validation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the BackendAuthenticationConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#name GoogleNetworkSecurityBackendAuthenticationConfig#name}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#client_certificate GoogleNetworkSecurityBackendAuthenticationConfig#client_certificate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#description GoogleNetworkSecurityBackendAuthenticationConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the BackendAuthenticationConfig resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#labels GoogleNetworkSecurityBackendAuthenticationConfig#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the backend authentication config. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#location GoogleNetworkSecurityBackendAuthenticationConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityBackendAuthenticationConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#timeouts GoogleNetworkSecurityBackendAuthenticationConfig#timeouts}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig"></a>

```csharp
public string TrustConfig { get; set; }
```

- *Type:* string

Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#trust_config GoogleNetworkSecurityBackendAuthenticationConfig#trust_config}

---

##### `WellKnownRoots`<sup>Optional</sup> <a name="WellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots"></a>

```csharp
public string WellKnownRoots { get; set; }
```

- *Type:* string

Well known roots to use for server certificate validation.

If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#well_known_roots GoogleNetworkSecurityBackendAuthenticationConfig#well_known_roots}

---

### GoogleNetworkSecurityBackendAuthenticationConfigTimeouts <a name="GoogleNetworkSecurityBackendAuthenticationConfigTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityBackendAuthenticationConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#create GoogleNetworkSecurityBackendAuthenticationConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#delete GoogleNetworkSecurityBackendAuthenticationConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#update GoogleNetworkSecurityBackendAuthenticationConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#create GoogleNetworkSecurityBackendAuthenticationConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#delete GoogleNetworkSecurityBackendAuthenticationConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.32.0/docs/resources/google_network_security_backend_authentication_config#update GoogleNetworkSecurityBackendAuthenticationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference <a name="GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



