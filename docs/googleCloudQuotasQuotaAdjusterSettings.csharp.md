# `googleCloudQuotasQuotaAdjusterSettings` Submodule <a name="`googleCloudQuotasQuotaAdjusterSettings` Submodule" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudQuotasQuotaAdjusterSettings <a name="GoogleCloudQuotasQuotaAdjusterSettings" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings google_cloud_quotas_quota_adjuster_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaAdjusterSettings(Construct Scope, string Id, GoogleCloudQuotasQuotaAdjusterSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig">GoogleCloudQuotasQuotaAdjusterSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig">GoogleCloudQuotasQuotaAdjusterSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudQuotasQuotaAdjusterSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudQuotasQuotaAdjusterSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudQuotasQuotaAdjusterSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudQuotasQuotaAdjusterSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudQuotasQuotaAdjusterSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudQuotasQuotaAdjusterSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleCloudQuotasQuotaAdjusterSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudQuotasQuotaAdjusterSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudQuotasQuotaAdjusterSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudQuotasQuotaAdjusterSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveContainer">EffectiveContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveEnablement">EffectiveEnablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablementInput">EnablementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablement">Enablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveContainer`<sup>Required</sup> <a name="EffectiveContainer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveContainer"></a>

```csharp
public string EffectiveContainer { get; }
```

- *Type:* string

---

##### `EffectiveEnablement`<sup>Required</sup> <a name="EffectiveEnablement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveEnablement"></a>

```csharp
public string EffectiveEnablement { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeouts"></a>

```csharp
public GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a>

---

##### `EnablementInput`<sup>Optional</sup> <a name="EnablementInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablementInput"></a>

```csharp
public string EnablementInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Enablement`<sup>Required</sup> <a name="Enablement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablement"></a>

```csharp
public string Enablement { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudQuotasQuotaAdjusterSettingsConfig <a name="GoogleCloudQuotasQuotaAdjusterSettingsConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaAdjusterSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Enablement,
    string Id = null,
    string Parent = null,
    GoogleCloudQuotasQuotaAdjusterSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.enablement">Enablement</a></code> | <code>string</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#id GoogleCloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enablement`<sup>Required</sup> <a name="Enablement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.enablement"></a>

```csharp
public string Enablement { get; set; }
```

- *Type:* string

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#enablement GoogleCloudQuotasQuotaAdjusterSettings#enablement}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#id GoogleCloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#parent GoogleCloudQuotasQuotaAdjusterSettings#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.timeouts"></a>

```csharp
public GoogleCloudQuotasQuotaAdjusterSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#timeouts GoogleCloudQuotasQuotaAdjusterSettings#timeouts}

---

### GoogleCloudQuotasQuotaAdjusterSettingsTimeouts <a name="GoogleCloudQuotasQuotaAdjusterSettingsTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaAdjusterSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#create GoogleCloudQuotasQuotaAdjusterSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#delete GoogleCloudQuotasQuotaAdjusterSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#update GoogleCloudQuotasQuotaAdjusterSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#create GoogleCloudQuotasQuotaAdjusterSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#delete GoogleCloudQuotasQuotaAdjusterSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#update GoogleCloudQuotasQuotaAdjusterSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference <a name="GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



