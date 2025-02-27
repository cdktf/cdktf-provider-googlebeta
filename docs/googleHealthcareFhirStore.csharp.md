# `googleHealthcareFhirStore` Submodule <a name="`googleHealthcareFhirStore` Submodule" id="@cdktf/provider-google-beta.googleHealthcareFhirStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareFhirStore <a name="GoogleHealthcareFhirStore" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store google_healthcare_fhir_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStore(Construct Scope, string Id, GoogleHealthcareFhirStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig">GoogleHealthcareFhirStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig">GoogleHealthcareFhirStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs">PutNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs">PutStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetComplexDataTypeReferenceParsing">ResetComplexDataTypeReferenceParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDefaultSearchHandlingStrict">ResetDefaultSearchHandlingStrict</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableReferentialIntegrity">ResetDisableReferentialIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableResourceVersioning">ResetDisableResourceVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryImport">ResetEnableHistoryImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryModifications">ResetEnableHistoryModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableUpdateCreate">ResetEnableUpdateCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfigs">ResetNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetStreamConfigs">ResetStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig"></a>

```csharp
private void PutNotificationConfig(GoogleHealthcareFhirStoreNotificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---

##### `PutNotificationConfigs` <a name="PutNotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs"></a>

```csharp
private void PutNotificationConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutStreamConfigs` <a name="PutStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs"></a>

```csharp
private void PutStreamConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleHealthcareFhirStoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

---

##### `ResetComplexDataTypeReferenceParsing` <a name="ResetComplexDataTypeReferenceParsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetComplexDataTypeReferenceParsing"></a>

```csharp
private void ResetComplexDataTypeReferenceParsing()
```

##### `ResetDefaultSearchHandlingStrict` <a name="ResetDefaultSearchHandlingStrict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDefaultSearchHandlingStrict"></a>

```csharp
private void ResetDefaultSearchHandlingStrict()
```

##### `ResetDisableReferentialIntegrity` <a name="ResetDisableReferentialIntegrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableReferentialIntegrity"></a>

```csharp
private void ResetDisableReferentialIntegrity()
```

##### `ResetDisableResourceVersioning` <a name="ResetDisableResourceVersioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableResourceVersioning"></a>

```csharp
private void ResetDisableResourceVersioning()
```

##### `ResetEnableHistoryImport` <a name="ResetEnableHistoryImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryImport"></a>

```csharp
private void ResetEnableHistoryImport()
```

##### `ResetEnableHistoryModifications` <a name="ResetEnableHistoryModifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryModifications"></a>

```csharp
private void ResetEnableHistoryModifications()
```

##### `ResetEnableUpdateCreate` <a name="ResetEnableUpdateCreate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableUpdateCreate"></a>

```csharp
private void ResetEnableUpdateCreate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfig"></a>

```csharp
private void ResetNotificationConfig()
```

##### `ResetNotificationConfigs` <a name="ResetNotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfigs"></a>

```csharp
private void ResetNotificationConfigs()
```

##### `ResetStreamConfigs` <a name="ResetStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetStreamConfigs"></a>

```csharp
private void ResetStreamConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleHealthcareFhirStore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleHealthcareFhirStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleHealthcareFhirStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleHealthcareFhirStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleHealthcareFhirStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleHealthcareFhirStore resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleHealthcareFhirStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleHealthcareFhirStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareFhirStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference">GoogleHealthcareFhirStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigs">NotificationConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList">GoogleHealthcareFhirStoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigs">StreamConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList">GoogleHealthcareFhirStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference">GoogleHealthcareFhirStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsingInput">ComplexDataTypeReferenceParsingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrictInput">DefaultSearchHandlingStrictInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrityInput">DisableReferentialIntegrityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioningInput">DisableResourceVersioningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImportInput">EnableHistoryImportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModificationsInput">EnableHistoryModificationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreateInput">EnableUpdateCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigsInput">NotificationConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigsInput">StreamConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsing">ComplexDataTypeReferenceParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrict">DefaultSearchHandlingStrict</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrity">DisableReferentialIntegrity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioning">DisableResourceVersioning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImport">EnableHistoryImport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModifications">EnableHistoryModifications</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreate">EnableUpdateCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfig"></a>

```csharp
public GoogleHealthcareFhirStoreNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference">GoogleHealthcareFhirStoreNotificationConfigOutputReference</a>

---

##### `NotificationConfigs`<sup>Required</sup> <a name="NotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigs"></a>

```csharp
public GoogleHealthcareFhirStoreNotificationConfigsList NotificationConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList">GoogleHealthcareFhirStoreNotificationConfigsList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `StreamConfigs`<sup>Required</sup> <a name="StreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigs"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsList StreamConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList">GoogleHealthcareFhirStoreStreamConfigsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeouts"></a>

```csharp
public GoogleHealthcareFhirStoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference">GoogleHealthcareFhirStoreTimeoutsOutputReference</a>

---

##### `ComplexDataTypeReferenceParsingInput`<sup>Optional</sup> <a name="ComplexDataTypeReferenceParsingInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsingInput"></a>

```csharp
public string ComplexDataTypeReferenceParsingInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DefaultSearchHandlingStrictInput`<sup>Optional</sup> <a name="DefaultSearchHandlingStrictInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrictInput"></a>

```csharp
public object DefaultSearchHandlingStrictInput { get; }
```

- *Type:* object

---

##### `DisableReferentialIntegrityInput`<sup>Optional</sup> <a name="DisableReferentialIntegrityInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrityInput"></a>

```csharp
public object DisableReferentialIntegrityInput { get; }
```

- *Type:* object

---

##### `DisableResourceVersioningInput`<sup>Optional</sup> <a name="DisableResourceVersioningInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioningInput"></a>

```csharp
public object DisableResourceVersioningInput { get; }
```

- *Type:* object

---

##### `EnableHistoryImportInput`<sup>Optional</sup> <a name="EnableHistoryImportInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImportInput"></a>

```csharp
public object EnableHistoryImportInput { get; }
```

- *Type:* object

---

##### `EnableHistoryModificationsInput`<sup>Optional</sup> <a name="EnableHistoryModificationsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModificationsInput"></a>

```csharp
public object EnableHistoryModificationsInput { get; }
```

- *Type:* object

---

##### `EnableUpdateCreateInput`<sup>Optional</sup> <a name="EnableUpdateCreateInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreateInput"></a>

```csharp
public object EnableUpdateCreateInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigInput"></a>

```csharp
public GoogleHealthcareFhirStoreNotificationConfig NotificationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---

##### `NotificationConfigsInput`<sup>Optional</sup> <a name="NotificationConfigsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigsInput"></a>

```csharp
public object NotificationConfigsInput { get; }
```

- *Type:* object

---

##### `StreamConfigsInput`<sup>Optional</sup> <a name="StreamConfigsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigsInput"></a>

```csharp
public object StreamConfigsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ComplexDataTypeReferenceParsing`<sup>Required</sup> <a name="ComplexDataTypeReferenceParsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsing"></a>

```csharp
public string ComplexDataTypeReferenceParsing { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DefaultSearchHandlingStrict`<sup>Required</sup> <a name="DefaultSearchHandlingStrict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrict"></a>

```csharp
public object DefaultSearchHandlingStrict { get; }
```

- *Type:* object

---

##### `DisableReferentialIntegrity`<sup>Required</sup> <a name="DisableReferentialIntegrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrity"></a>

```csharp
public object DisableReferentialIntegrity { get; }
```

- *Type:* object

---

##### `DisableResourceVersioning`<sup>Required</sup> <a name="DisableResourceVersioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioning"></a>

```csharp
public object DisableResourceVersioning { get; }
```

- *Type:* object

---

##### `EnableHistoryImport`<sup>Required</sup> <a name="EnableHistoryImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImport"></a>

```csharp
public object EnableHistoryImport { get; }
```

- *Type:* object

---

##### `EnableHistoryModifications`<sup>Required</sup> <a name="EnableHistoryModifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModifications"></a>

```csharp
public object EnableHistoryModifications { get; }
```

- *Type:* object

---

##### `EnableUpdateCreate`<sup>Required</sup> <a name="EnableUpdateCreate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreate"></a>

```csharp
public object EnableUpdateCreate { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareFhirStoreConfig <a name="GoogleHealthcareFhirStoreConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Dataset,
    string Name,
    string ComplexDataTypeReferenceParsing = null,
    object DefaultSearchHandlingStrict = null,
    object DisableReferentialIntegrity = null,
    object DisableResourceVersioning = null,
    object EnableHistoryImport = null,
    object EnableHistoryModifications = null,
    object EnableUpdateCreate = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleHealthcareFhirStoreNotificationConfig NotificationConfig = null,
    object NotificationConfigs = null,
    object StreamConfigs = null,
    GoogleHealthcareFhirStoreTimeouts Timeouts = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dataset">Dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.name">Name</a></code> | <code>string</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing">ComplexDataTypeReferenceParsing</a></code> | <code>string</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.defaultSearchHandlingStrict">DefaultSearchHandlingStrict</a></code> | <code>object</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableReferentialIntegrity">DisableReferentialIntegrity</a></code> | <code>object</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableResourceVersioning">DisableResourceVersioning</a></code> | <code>object</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryImport">EnableHistoryImport</a></code> | <code>object</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryModifications">EnableHistoryModifications</a></code> | <code>object</code> | Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableUpdateCreate">EnableUpdateCreate</a></code> | <code>object</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfigs">NotificationConfigs</a></code> | <code>object</code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.streamConfigs">StreamConfigs</a></code> | <code>object</code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.version">Version</a></code> | <code>string</code> | The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#dataset GoogleHealthcareFhirStore#dataset}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#name GoogleHealthcareFhirStore#name}

---

##### `ComplexDataTypeReferenceParsing`<sup>Optional</sup> <a name="ComplexDataTypeReferenceParsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing"></a>

```csharp
public string ComplexDataTypeReferenceParsing { get; set; }
```

- *Type:* string

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#complex_data_type_reference_parsing GoogleHealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `DefaultSearchHandlingStrict`<sup>Optional</sup> <a name="DefaultSearchHandlingStrict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.defaultSearchHandlingStrict"></a>

```csharp
public object DefaultSearchHandlingStrict { get; set; }
```

- *Type:* object

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#default_search_handling_strict GoogleHealthcareFhirStore#default_search_handling_strict}

---

##### `DisableReferentialIntegrity`<sup>Optional</sup> <a name="DisableReferentialIntegrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableReferentialIntegrity"></a>

```csharp
public object DisableReferentialIntegrity { get; set; }
```

- *Type:* object

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#disable_referential_integrity GoogleHealthcareFhirStore#disable_referential_integrity}

---

##### `DisableResourceVersioning`<sup>Optional</sup> <a name="DisableResourceVersioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableResourceVersioning"></a>

```csharp
public object DisableResourceVersioning { get; set; }
```

- *Type:* object

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#disable_resource_versioning GoogleHealthcareFhirStore#disable_resource_versioning}

---

##### `EnableHistoryImport`<sup>Optional</sup> <a name="EnableHistoryImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryImport"></a>

```csharp
public object EnableHistoryImport { get; set; }
```

- *Type:* object

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#enable_history_import GoogleHealthcareFhirStore#enable_history_import}

---

##### `EnableHistoryModifications`<sup>Optional</sup> <a name="EnableHistoryModifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryModifications"></a>

```csharp
public object EnableHistoryModifications { get; set; }
```

- *Type:* object

Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store.

If set to false, using history bundles fails with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#enable_history_modifications GoogleHealthcareFhirStore#enable_history_modifications}

---

##### `EnableUpdateCreate`<sup>Optional</sup> <a name="EnableUpdateCreate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableUpdateCreate"></a>

```csharp
public object EnableUpdateCreate { get; set; }
```

- *Type:* object

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#enable_update_create GoogleHealthcareFhirStore#enable_update_create}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#labels GoogleHealthcareFhirStore#labels}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfig"></a>

```csharp
public GoogleHealthcareFhirStoreNotificationConfig NotificationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#notification_config GoogleHealthcareFhirStore#notification_config}

---

##### `NotificationConfigs`<sup>Optional</sup> <a name="NotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfigs"></a>

```csharp
public object NotificationConfigs { get; set; }
```

- *Type:* object

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#notification_configs GoogleHealthcareFhirStore#notification_configs}

---

##### `StreamConfigs`<sup>Optional</sup> <a name="StreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.streamConfigs"></a>

```csharp
public object StreamConfigs { get; set; }
```

- *Type:* object

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#stream_configs GoogleHealthcareFhirStore#stream_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.timeouts"></a>

```csharp
public GoogleHealthcareFhirStoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#timeouts GoogleHealthcareFhirStore#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#version GoogleHealthcareFhirStore#version}

---

### GoogleHealthcareFhirStoreNotificationConfig <a name="GoogleHealthcareFhirStoreNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreNotificationConfig {
    string PubsubTopic
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

### GoogleHealthcareFhirStoreNotificationConfigs <a name="GoogleHealthcareFhirStoreNotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreNotificationConfigs {
    string PubsubTopic,
    object SendFullResource = null,
    object SendPreviousResourceOnDelete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendFullResource">SendFullResource</a></code> | <code>object</code> | Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete">SendPreviousResourceOnDelete</a></code> | <code>object</code> | Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. |

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

##### `SendFullResource`<sup>Optional</sup> <a name="SendFullResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendFullResource"></a>

```csharp
public object SendFullResource { get; set; }
```

- *Type:* object

Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.

Note that setting this to true does not guarantee that all resources will be sent in the format of
full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
it needs to fetch the full resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#send_full_resource GoogleHealthcareFhirStore#send_full_resource}

---

##### `SendPreviousResourceOnDelete`<sup>Optional</sup> <a name="SendPreviousResourceOnDelete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete"></a>

```csharp
public object SendPreviousResourceOnDelete { get; set; }
```

- *Type:* object

Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource.

Note that setting this to
true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#send_previous_resource_on_delete GoogleHealthcareFhirStore#send_previous_resource_on_delete}

---

### GoogleHealthcareFhirStoreStreamConfigs <a name="GoogleHealthcareFhirStoreStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigs {
    GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination BigqueryDestination,
    string[] ResourceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Supply a FHIR resource type (such as "Patient" or "Observation"). |

---

##### `BigqueryDestination`<sup>Required</sup> <a name="BigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.bigqueryDestination"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination BigqueryDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#bigquery_destination GoogleHealthcareFhirStore#bigquery_destination}

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Supply a FHIR resource type (such as "Patient" or "Observation").

See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#resource_types GoogleHealthcareFhirStore#resource_types}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination {
    string DatasetUri,
    GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig SchemaConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri">DatasetUri</a></code> | <code>string</code> | BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig">SchemaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | schema_config block. |

---

##### `DatasetUri`<sup>Required</sup> <a name="DatasetUri" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri"></a>

```csharp
public string DatasetUri { get; set; }
```

- *Type:* string

BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#dataset_uri GoogleHealthcareFhirStore#dataset_uri}

---

##### `SchemaConfig`<sup>Required</sup> <a name="SchemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig SchemaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

schema_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#schema_config GoogleHealthcareFhirStore#schema_config}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig {
    double RecursiveStructureDepth,
    GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig LastUpdatedPartitionConfig = null,
    string SchemaType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth">RecursiveStructureDepth</a></code> | <code>double</code> | The depth for all recursive structures in the output analytics schema. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig">LastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | last_updated_partition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType">SchemaType</a></code> | <code>string</code> | Specifies the output schema type. |

---

##### `RecursiveStructureDepth`<sup>Required</sup> <a name="RecursiveStructureDepth" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth"></a>

```csharp
public double RecursiveStructureDepth { get; set; }
```

- *Type:* double

The depth for all recursive structures in the output analytics schema.

For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#recursive_structure_depth GoogleHealthcareFhirStore#recursive_structure_depth}

---

##### `LastUpdatedPartitionConfig`<sup>Optional</sup> <a name="LastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig LastUpdatedPartitionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

last_updated_partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#last_updated_partition_config GoogleHealthcareFhirStore#last_updated_partition_config}

---

##### `SchemaType`<sup>Optional</sup> <a name="SchemaType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType"></a>

```csharp
public string SchemaType { get; set; }
```

- *Type:* string

Specifies the output schema type.

* ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
* ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
* LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#schema_type GoogleHealthcareFhirStore#schema_type}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
    string Type,
    string ExpirationMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type">Type</a></code> | <code>string</code> | Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs">ExpirationMs</a></code> | <code>string</code> | Number of milliseconds for which to keep the storage for a partition. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#type GoogleHealthcareFhirStore#type}

---

##### `ExpirationMs`<sup>Optional</sup> <a name="ExpirationMs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs"></a>

```csharp
public string ExpirationMs { get; set; }
```

- *Type:* string

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#expiration_ms GoogleHealthcareFhirStore#expiration_ms}

---

### GoogleHealthcareFhirStoreTimeouts <a name="GoogleHealthcareFhirStoreTimeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareFhirStoreNotificationConfigOutputReference <a name="GoogleHealthcareFhirStoreNotificationConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleHealthcareFhirStoreNotificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---


### GoogleHealthcareFhirStoreNotificationConfigsList <a name="GoogleHealthcareFhirStoreNotificationConfigsList" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreNotificationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get"></a>

```csharp
private GoogleHealthcareFhirStoreNotificationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleHealthcareFhirStoreNotificationConfigsOutputReference <a name="GoogleHealthcareFhirStoreNotificationConfigsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreNotificationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource">ResetSendFullResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete">ResetSendPreviousResourceOnDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSendFullResource` <a name="ResetSendFullResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource"></a>

```csharp
private void ResetSendFullResource()
```

##### `ResetSendPreviousResourceOnDelete` <a name="ResetSendPreviousResourceOnDelete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete"></a>

```csharp
private void ResetSendPreviousResourceOnDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput">SendFullResourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput">SendPreviousResourceOnDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource">SendFullResource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete">SendPreviousResourceOnDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `SendFullResourceInput`<sup>Optional</sup> <a name="SendFullResourceInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput"></a>

```csharp
public object SendFullResourceInput { get; }
```

- *Type:* object

---

##### `SendPreviousResourceOnDeleteInput`<sup>Optional</sup> <a name="SendPreviousResourceOnDeleteInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput"></a>

```csharp
public object SendPreviousResourceOnDeleteInput { get; }
```

- *Type:* object

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `SendFullResource`<sup>Required</sup> <a name="SendFullResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource"></a>

```csharp
public object SendFullResource { get; }
```

- *Type:* object

---

##### `SendPreviousResourceOnDelete`<sup>Required</sup> <a name="SendPreviousResourceOnDelete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete"></a>

```csharp
public object SendPreviousResourceOnDelete { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig">PutSchemaConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaConfig` <a name="PutSchemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig"></a>

```csharp
private void PutSchemaConfig(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig">SchemaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput">DatasetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput">SchemaConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri">DatasetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaConfig`<sup>Required</sup> <a name="SchemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference SchemaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a>

---

##### `DatasetUriInput`<sup>Optional</sup> <a name="DatasetUriInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput"></a>

```csharp
public string DatasetUriInput { get; }
```

- *Type:* string

---

##### `SchemaConfigInput`<sup>Optional</sup> <a name="SchemaConfigInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig SchemaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---

##### `DatasetUri`<sup>Required</sup> <a name="DatasetUri" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri"></a>

```csharp
public string DatasetUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs">ResetExpirationMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationMs` <a name="ResetExpirationMs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs"></a>

```csharp
private void ResetExpirationMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput">ExpirationMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs">ExpirationMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationMsInput`<sup>Optional</sup> <a name="ExpirationMsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput"></a>

```csharp
public string ExpirationMsInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ExpirationMs`<sup>Required</sup> <a name="ExpirationMs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs"></a>

```csharp
public string ExpirationMs { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig">PutLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig">ResetLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType">ResetSchemaType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLastUpdatedPartitionConfig` <a name="PutLastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig"></a>

```csharp
private void PutLastUpdatedPartitionConfig(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `ResetLastUpdatedPartitionConfig` <a name="ResetLastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig"></a>

```csharp
private void ResetLastUpdatedPartitionConfig()
```

##### `ResetSchemaType` <a name="ResetSchemaType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType"></a>

```csharp
private void ResetSchemaType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig">LastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput">LastUpdatedPartitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput">RecursiveStructureDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput">SchemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth">RecursiveStructureDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType">SchemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastUpdatedPartitionConfig`<sup>Required</sup> <a name="LastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference LastUpdatedPartitionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a>

---

##### `LastUpdatedPartitionConfigInput`<sup>Optional</sup> <a name="LastUpdatedPartitionConfigInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig LastUpdatedPartitionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `RecursiveStructureDepthInput`<sup>Optional</sup> <a name="RecursiveStructureDepthInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput"></a>

```csharp
public double RecursiveStructureDepthInput { get; }
```

- *Type:* double

---

##### `SchemaTypeInput`<sup>Optional</sup> <a name="SchemaTypeInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput"></a>

```csharp
public string SchemaTypeInput { get; }
```

- *Type:* string

---

##### `RecursiveStructureDepth`<sup>Required</sup> <a name="RecursiveStructureDepth" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth"></a>

```csharp
public double RecursiveStructureDepth { get; }
```

- *Type:* double

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType"></a>

```csharp
public string SchemaType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


### GoogleHealthcareFhirStoreStreamConfigsList <a name="GoogleHealthcareFhirStoreStreamConfigsList" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get"></a>

```csharp
private GoogleHealthcareFhirStoreStreamConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleHealthcareFhirStoreStreamConfigsOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreStreamConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination">PutBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryDestination` <a name="PutBigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```csharp
private void PutBigqueryDestination(GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes"></a>

```csharp
private void ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">BigqueryDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BigqueryDestination`<sup>Required</sup> <a name="BigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference BigqueryDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `BigqueryDestinationInput`<sup>Optional</sup> <a name="BigqueryDestinationInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```csharp
public GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination BigqueryDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleHealthcareFhirStoreTimeoutsOutputReference <a name="GoogleHealthcareFhirStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleHealthcareFhirStoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



