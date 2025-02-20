# `googleDialogflowCxAgent` Submodule <a name="`googleDialogflowCxAgent` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxAgent <a name="GoogleDialogflowCxAgent" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent google_dialogflow_cx_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgent(scope: Construct, id: string, config: GoogleDialogflowCxAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig">GoogleDialogflowCxAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig">GoogleDialogflowCxAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings">putAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putGitIntegrationSettings">putGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings">putSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTextToSpeechSettings">putTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAdvancedSettings">resetAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAvatarUri">resetAvatarUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableSpellCorrection">resetEnableSpellCorrection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableStackdriverLogging">resetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetGitIntegrationSettings">resetGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSpeechToTextSettings">resetSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSupportedLanguageCodes">resetSupportedLanguageCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTextToSpeechSettings">resetTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedSettings` <a name="putAdvancedSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings"></a>

```typescript
public putAdvancedSettings(value: GoogleDialogflowCxAgentAdvancedSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a>

---

##### `putGitIntegrationSettings` <a name="putGitIntegrationSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putGitIntegrationSettings"></a>

```typescript
public putGitIntegrationSettings(value: GoogleDialogflowCxAgentGitIntegrationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putGitIntegrationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a>

---

##### `putSpeechToTextSettings` <a name="putSpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings"></a>

```typescript
public putSpeechToTextSettings(value: GoogleDialogflowCxAgentSpeechToTextSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

---

##### `putTextToSpeechSettings` <a name="putTextToSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTextToSpeechSettings"></a>

```typescript
public putTextToSpeechSettings(value: GoogleDialogflowCxAgentTextToSpeechSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTextToSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowCxAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>

---

##### `resetAdvancedSettings` <a name="resetAdvancedSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAdvancedSettings"></a>

```typescript
public resetAdvancedSettings(): void
```

##### `resetAvatarUri` <a name="resetAvatarUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAvatarUri"></a>

```typescript
public resetAvatarUri(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableSpellCorrection` <a name="resetEnableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableSpellCorrection"></a>

```typescript
public resetEnableSpellCorrection(): void
```

##### `resetEnableStackdriverLogging` <a name="resetEnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableStackdriverLogging"></a>

```typescript
public resetEnableStackdriverLogging(): void
```

##### `resetGitIntegrationSettings` <a name="resetGitIntegrationSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetGitIntegrationSettings"></a>

```typescript
public resetGitIntegrationSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSecuritySettings"></a>

```typescript
public resetSecuritySettings(): void
```

##### `resetSpeechToTextSettings` <a name="resetSpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSpeechToTextSettings"></a>

```typescript
public resetSpeechToTextSettings(): void
```

##### `resetSupportedLanguageCodes` <a name="resetSupportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSupportedLanguageCodes"></a>

```typescript
public resetSupportedLanguageCodes(): void
```

##### `resetTextToSpeechSettings` <a name="resetTextToSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTextToSpeechSettings"></a>

```typescript
public resetTextToSpeechSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxAgent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDialogflowCxAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.advancedSettings">advancedSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.gitIntegrationSettings">gitIntegrationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference">GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettings">speechToTextSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference">GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.startFlow">startFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference">GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference">GoogleDialogflowCxAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.advancedSettingsInput">advancedSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUriInput">avatarUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCodeInput">defaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrectionInput">enableSpellCorrectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLoggingInput">enableStackdriverLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.gitIntegrationSettingsInput">gitIntegrationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettingsInput">securitySettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettingsInput">speechToTextSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodesInput">supportedLanguageCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.textToSpeechSettingsInput">textToSpeechSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUri">avatarUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrection">enableSpellCorrection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettings">securitySettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedSettings`<sup>Required</sup> <a name="advancedSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: GoogleDialogflowCxAgentAdvancedSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsOutputReference</a>

---

##### `gitIntegrationSettings`<sup>Required</sup> <a name="gitIntegrationSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.gitIntegrationSettings"></a>

```typescript
public readonly gitIntegrationSettings: GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference">GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `speechToTextSettings`<sup>Required</sup> <a name="speechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettings"></a>

```typescript
public readonly speechToTextSettings: GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference">GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference</a>

---

##### `startFlow`<sup>Required</sup> <a name="startFlow" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.startFlow"></a>

```typescript
public readonly startFlow: string;
```

- *Type:* string

---

##### `textToSpeechSettings`<sup>Required</sup> <a name="textToSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.textToSpeechSettings"></a>

```typescript
public readonly textToSpeechSettings: GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference">GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference">GoogleDialogflowCxAgentTimeoutsOutputReference</a>

---

##### `advancedSettingsInput`<sup>Optional</sup> <a name="advancedSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.advancedSettingsInput"></a>

```typescript
public readonly advancedSettingsInput: GoogleDialogflowCxAgentAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a>

---

##### `avatarUriInput`<sup>Optional</sup> <a name="avatarUriInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUriInput"></a>

```typescript
public readonly avatarUriInput: string;
```

- *Type:* string

---

##### `defaultLanguageCodeInput`<sup>Optional</sup> <a name="defaultLanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCodeInput"></a>

```typescript
public readonly defaultLanguageCodeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableSpellCorrectionInput`<sup>Optional</sup> <a name="enableSpellCorrectionInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrectionInput"></a>

```typescript
public readonly enableSpellCorrectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLoggingInput`<sup>Optional</sup> <a name="enableStackdriverLoggingInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLoggingInput"></a>

```typescript
public readonly enableStackdriverLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitIntegrationSettingsInput`<sup>Optional</sup> <a name="gitIntegrationSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.gitIntegrationSettingsInput"></a>

```typescript
public readonly gitIntegrationSettingsInput: GoogleDialogflowCxAgentGitIntegrationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettingsInput"></a>

```typescript
public readonly securitySettingsInput: string;
```

- *Type:* string

---

##### `speechToTextSettingsInput`<sup>Optional</sup> <a name="speechToTextSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettingsInput"></a>

```typescript
public readonly speechToTextSettingsInput: GoogleDialogflowCxAgentSpeechToTextSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

---

##### `supportedLanguageCodesInput`<sup>Optional</sup> <a name="supportedLanguageCodesInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodesInput"></a>

```typescript
public readonly supportedLanguageCodesInput: string[];
```

- *Type:* string[]

---

##### `textToSpeechSettingsInput`<sup>Optional</sup> <a name="textToSpeechSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.textToSpeechSettingsInput"></a>

```typescript
public readonly textToSpeechSettingsInput: GoogleDialogflowCxAgentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowCxAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `avatarUri`<sup>Required</sup> <a name="avatarUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUri"></a>

```typescript
public readonly avatarUri: string;
```

- *Type:* string

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableSpellCorrection`<sup>Required</sup> <a name="enableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrection"></a>

```typescript
public readonly enableSpellCorrection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLogging`<sup>Required</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettings"></a>

```typescript
public readonly securitySettings: string;
```

- *Type:* string

---

##### `supportedLanguageCodes`<sup>Required</sup> <a name="supportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodes"></a>

```typescript
public readonly supportedLanguageCodes: string[];
```

- *Type:* string[]

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxAgentAdvancedSettings <a name="GoogleDialogflowCxAgentAdvancedSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentAdvancedSettings: googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination">audioExportGcsDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | audio_export_gcs_destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.dtmfSettings">dtmfSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | dtmf_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.speechSettings">speechSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a></code> | speech_settings block. |

---

##### `audioExportGcsDestination`<sup>Optional</sup> <a name="audioExportGcsDestination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination"></a>

```typescript
public readonly audioExportGcsDestination: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#audio_export_gcs_destination GoogleDialogflowCxAgent#audio_export_gcs_destination}

---

##### `dtmfSettings`<sup>Optional</sup> <a name="dtmfSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.dtmfSettings"></a>

```typescript
public readonly dtmfSettings: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#dtmf_settings GoogleDialogflowCxAgent#dtmf_settings}

---

##### `loggingSettings`<sup>Optional</sup> <a name="loggingSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.loggingSettings"></a>

```typescript
public readonly loggingSettings: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#logging_settings GoogleDialogflowCxAgent#logging_settings}

---

##### `speechSettings`<sup>Optional</sup> <a name="speechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.speechSettings"></a>

```typescript
public readonly speechSettings: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a>

speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#speech_settings GoogleDialogflowCxAgent#speech_settings}

---

### GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination <a name="GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination: googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri">uri</a></code> | <code>string</code> | The Google Cloud Storage URI for the exported objects. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#uri GoogleDialogflowCxAgent#uri}

---

### GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings <a name="GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentAdvancedSettingsDtmfSettings: googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, incoming audio is processed for DTMF (dual tone multi frequency) events. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit">finishDigit</a></code> | <code>string</code> | The digit that terminates a DTMF digit sequence. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits">maxDigits</a></code> | <code>number</code> | Max length of DTMF digits. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#enabled GoogleDialogflowCxAgent#enabled}

---

##### `finishDigit`<sup>Optional</sup> <a name="finishDigit" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#finish_digit GoogleDialogflowCxAgent#finish_digit}

---

##### `maxDigits`<sup>Optional</sup> <a name="maxDigits" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits"></a>

```typescript
public readonly maxDigits: number;
```

- *Type:* number

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#max_digits GoogleDialogflowCxAgent#max_digits}

---

### GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings <a name="GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentAdvancedSettingsLoggingSettings: googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableConsentBasedRedaction">enableConsentBasedRedaction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableInteractionLogging">enableInteractionLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables DF Interaction logging. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables Google Cloud Logging. |

---

##### `enableConsentBasedRedaction`<sup>Optional</sup> <a name="enableConsentBasedRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableConsentBasedRedaction"></a>

```typescript
public readonly enableConsentBasedRedaction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#enable_consent_based_redaction GoogleDialogflowCxAgent#enable_consent_based_redaction}

---

##### `enableInteractionLogging`<sup>Optional</sup> <a name="enableInteractionLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableInteractionLogging"></a>

```typescript
public readonly enableInteractionLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables DF Interaction logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#enable_interaction_logging GoogleDialogflowCxAgent#enable_interaction_logging}

---

##### `enableStackdriverLogging`<sup>Optional</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables Google Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}

---

### GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings <a name="GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentAdvancedSettingsSpeechSettings: googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.endpointerSensitivity">endpointerSensitivity</a></code> | <code>number</code> | Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.models">models</a></code> | <code>{[ key: string ]: string}</code> | Mapping from language to Speech-to-Text model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.noSpeechTimeout">noSpeechTimeout</a></code> | <code>string</code> | Timeout before detecting no speech. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.useTimeoutBasedEndpointing">useTimeoutBasedEndpointing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value. |

---

##### `endpointerSensitivity`<sup>Optional</sup> <a name="endpointerSensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.endpointerSensitivity"></a>

```typescript
public readonly endpointerSensitivity: number;
```

- *Type:* number

Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#endpointer_sensitivity GoogleDialogflowCxAgent#endpointer_sensitivity}

---

##### `models`<sup>Optional</sup> <a name="models" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.models"></a>

```typescript
public readonly models: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping from language to Speech-to-Text model.

The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#models GoogleDialogflowCxAgent#models}

---

##### `noSpeechTimeout`<sup>Optional</sup> <a name="noSpeechTimeout" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.noSpeechTimeout"></a>

```typescript
public readonly noSpeechTimeout: string;
```

- *Type:* string

Timeout before detecting no speech. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#no_speech_timeout GoogleDialogflowCxAgent#no_speech_timeout}

---

##### `useTimeoutBasedEndpointing`<sup>Optional</sup> <a name="useTimeoutBasedEndpointing" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.useTimeoutBasedEndpointing"></a>

```typescript
public readonly useTimeoutBasedEndpointing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#use_timeout_based_endpointing GoogleDialogflowCxAgent#use_timeout_based_endpointing}

---

### GoogleDialogflowCxAgentConfig <a name="GoogleDialogflowCxAgentConfig" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentConfig: googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the agent, unique within the location. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.location">location</a></code> | <code>string</code> | The name of the location this agent is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.advancedSettings">advancedSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.avatarUri">avatarUri</a></code> | <code>string</code> | The URI of the agent's avatar. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.description">description</a></code> | <code>string</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableSpellCorrection">enableSpellCorrection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.gitIntegrationSettings">gitIntegrationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a></code> | git_integration_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.securitySettings">securitySettings</a></code> | <code>string</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.speechToTextSettings">speechToTextSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | speech_to_text_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>string[]</code> | The list of all languages supported by this agent (except for the default_language_code). |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#default_language_code GoogleDialogflowCxAgent#default_language_code}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the agent, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
 This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
 Another options is to use global location so you don't need to manually configure location settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#location GoogleDialogflowCxAgent#location}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#time_zone GoogleDialogflowCxAgent#time_zone}

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: GoogleDialogflowCxAgentAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#advanced_settings GoogleDialogflowCxAgent#advanced_settings}

---

##### `avatarUri`<sup>Optional</sup> <a name="avatarUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.avatarUri"></a>

```typescript
public readonly avatarUri: string;
```

- *Type:* string

The URI of the agent's avatar.

Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#avatar_uri GoogleDialogflowCxAgent#avatar_uri}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#description GoogleDialogflowCxAgent#description}

---

##### `enableSpellCorrection`<sup>Optional</sup> <a name="enableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableSpellCorrection"></a>

```typescript
public readonly enableSpellCorrection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#enable_spell_correction GoogleDialogflowCxAgent#enable_spell_correction}

---

##### `enableStackdriverLogging`<sup>Optional</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}

---

##### `gitIntegrationSettings`<sup>Optional</sup> <a name="gitIntegrationSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.gitIntegrationSettings"></a>

```typescript
public readonly gitIntegrationSettings: GoogleDialogflowCxAgentGitIntegrationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a>

git_integration_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#git_integration_settings GoogleDialogflowCxAgent#git_integration_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}.

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.securitySettings"></a>

```typescript
public readonly securitySettings: string;
```

- *Type:* string

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#security_settings GoogleDialogflowCxAgent#security_settings}

---

##### `speechToTextSettings`<sup>Optional</sup> <a name="speechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.speechToTextSettings"></a>

```typescript
public readonly speechToTextSettings: GoogleDialogflowCxAgentSpeechToTextSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

speech_to_text_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#speech_to_text_settings GoogleDialogflowCxAgent#speech_to_text_settings}

---

##### `supportedLanguageCodes`<sup>Optional</sup> <a name="supportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.supportedLanguageCodes"></a>

```typescript
public readonly supportedLanguageCodes: string[];
```

- *Type:* string[]

The list of all languages supported by this agent (except for the default_language_code).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#supported_language_codes GoogleDialogflowCxAgent#supported_language_codes}

---

##### `textToSpeechSettings`<sup>Optional</sup> <a name="textToSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.textToSpeechSettings"></a>

```typescript
public readonly textToSpeechSettings: GoogleDialogflowCxAgentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#text_to_speech_settings GoogleDialogflowCxAgent#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxAgentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#timeouts GoogleDialogflowCxAgent#timeouts}

---

### GoogleDialogflowCxAgentGitIntegrationSettings <a name="GoogleDialogflowCxAgentGitIntegrationSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentGitIntegrationSettings: googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings.property.githubSettings">githubSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | github_settings block. |

---

##### `githubSettings`<sup>Optional</sup> <a name="githubSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings.property.githubSettings"></a>

```typescript
public readonly githubSettings: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

github_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#github_settings GoogleDialogflowCxAgent#github_settings}

---

### GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings <a name="GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentGitIntegrationSettingsGithubSettings: googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken">accessToken</a></code> | <code>string</code> | The access token used to authenticate the access to the GitHub repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches">branches</a></code> | <code>string[]</code> | A list of branches configured to be used from Dialogflow. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName">displayName</a></code> | <code>string</code> | The unique repository display name for the GitHub repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri">repositoryUri</a></code> | <code>string</code> | The GitHub repository URI related to the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch">trackingBranch</a></code> | <code>string</code> | The branch of the GitHub repository tracked for this agent. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

The access token used to authenticate the access to the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#access_token GoogleDialogflowCxAgent#access_token}

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

A list of branches configured to be used from Dialogflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#branches GoogleDialogflowCxAgent#branches}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The unique repository display name for the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}

---

##### `repositoryUri`<sup>Optional</sup> <a name="repositoryUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri"></a>

```typescript
public readonly repositoryUri: string;
```

- *Type:* string

The GitHub repository URI related to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#repository_uri GoogleDialogflowCxAgent#repository_uri}

---

##### `trackingBranch`<sup>Optional</sup> <a name="trackingBranch" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch"></a>

```typescript
public readonly trackingBranch: string;
```

- *Type:* string

The branch of the GitHub repository tracked for this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#tracking_branch GoogleDialogflowCxAgent#tracking_branch}

---

### GoogleDialogflowCxAgentSpeechToTextSettings <a name="GoogleDialogflowCxAgentSpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentSpeechToTextSettings: googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation">enableSpeechAdaptation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use speech adaptation for speech recognition. |

---

##### `enableSpeechAdaptation`<sup>Optional</sup> <a name="enableSpeechAdaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation"></a>

```typescript
public readonly enableSpeechAdaptation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#enable_speech_adaptation GoogleDialogflowCxAgent#enable_speech_adaptation}

---

### GoogleDialogflowCxAgentTextToSpeechSettings <a name="GoogleDialogflowCxAgentTextToSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentTextToSpeechSettings: googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>string</code> | Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified. |

---

##### `synthesizeSpeechConfigs`<sup>Optional</sup> <a name="synthesizeSpeechConfigs" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```typescript
public readonly synthesizeSpeechConfigs: string;
```

- *Type:* string

Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#synthesize_speech_configs GoogleDialogflowCxAgent#synthesize_speech_configs}

---

### GoogleDialogflowCxAgentTimeouts <a name="GoogleDialogflowCxAgentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

const googleDialogflowCxAgentTimeouts: googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#create GoogleDialogflowCxAgent#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#delete GoogleDialogflowCxAgent#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#update GoogleDialogflowCxAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#create GoogleDialogflowCxAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#delete GoogleDialogflowCxAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dialogflow_cx_agent#update GoogleDialogflowCxAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---


### GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit">resetFinishDigit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits">resetMaxDigits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFinishDigit` <a name="resetFinishDigit" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit"></a>

```typescript
public resetFinishDigit(): void
```

##### `resetMaxDigits` <a name="resetMaxDigits" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits"></a>

```typescript
public resetMaxDigits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput">finishDigitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput">maxDigitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit">finishDigit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits">maxDigits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `finishDigitInput`<sup>Optional</sup> <a name="finishDigitInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput"></a>

```typescript
public readonly finishDigitInput: string;
```

- *Type:* string

---

##### `maxDigitsInput`<sup>Optional</sup> <a name="maxDigitsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput"></a>

```typescript
public readonly maxDigitsInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

---

##### `maxDigits`<sup>Required</sup> <a name="maxDigits" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits"></a>

```typescript
public readonly maxDigits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---


### GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableConsentBasedRedaction">resetEnableConsentBasedRedaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableInteractionLogging">resetEnableInteractionLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableStackdriverLogging">resetEnableStackdriverLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableConsentBasedRedaction` <a name="resetEnableConsentBasedRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableConsentBasedRedaction"></a>

```typescript
public resetEnableConsentBasedRedaction(): void
```

##### `resetEnableInteractionLogging` <a name="resetEnableInteractionLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableInteractionLogging"></a>

```typescript
public resetEnableInteractionLogging(): void
```

##### `resetEnableStackdriverLogging` <a name="resetEnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableStackdriverLogging"></a>

```typescript
public resetEnableStackdriverLogging(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedactionInput">enableConsentBasedRedactionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLoggingInput">enableInteractionLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLoggingInput">enableStackdriverLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedaction">enableConsentBasedRedaction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLogging">enableInteractionLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableConsentBasedRedactionInput`<sup>Optional</sup> <a name="enableConsentBasedRedactionInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedactionInput"></a>

```typescript
public readonly enableConsentBasedRedactionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableInteractionLoggingInput`<sup>Optional</sup> <a name="enableInteractionLoggingInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLoggingInput"></a>

```typescript
public readonly enableInteractionLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLoggingInput`<sup>Optional</sup> <a name="enableStackdriverLoggingInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLoggingInput"></a>

```typescript
public readonly enableStackdriverLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableConsentBasedRedaction`<sup>Required</sup> <a name="enableConsentBasedRedaction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedaction"></a>

```typescript
public readonly enableConsentBasedRedaction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableInteractionLogging`<sup>Required</sup> <a name="enableInteractionLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLogging"></a>

```typescript
public readonly enableInteractionLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLogging`<sup>Required</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a>

---


### GoogleDialogflowCxAgentAdvancedSettingsOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination">putAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings">putDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putLoggingSettings">putLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings">putSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination">resetAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings">resetDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetLoggingSettings">resetLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetSpeechSettings">resetSpeechSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioExportGcsDestination` <a name="putAudioExportGcsDestination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination"></a>

```typescript
public putAudioExportGcsDestination(value: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---

##### `putDtmfSettings` <a name="putDtmfSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings"></a>

```typescript
public putDtmfSettings(value: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---

##### `putLoggingSettings` <a name="putLoggingSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putLoggingSettings"></a>

```typescript
public putLoggingSettings(value: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a>

---

##### `putSpeechSettings` <a name="putSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings"></a>

```typescript
public putSpeechSettings(value: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a>

---

##### `resetAudioExportGcsDestination` <a name="resetAudioExportGcsDestination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination"></a>

```typescript
public resetAudioExportGcsDestination(): void
```

##### `resetDtmfSettings` <a name="resetDtmfSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings"></a>

```typescript
public resetDtmfSettings(): void
```

##### `resetLoggingSettings` <a name="resetLoggingSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetLoggingSettings"></a>

```typescript
public resetLoggingSettings(): void
```

##### `resetSpeechSettings` <a name="resetSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetSpeechSettings"></a>

```typescript
public resetSpeechSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination">audioExportGcsDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings">dtmfSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.speechSettings">speechSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput">audioExportGcsDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput">dtmfSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.loggingSettingsInput">loggingSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.speechSettingsInput">speechSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExportGcsDestination`<sup>Required</sup> <a name="audioExportGcsDestination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination"></a>

```typescript
public readonly audioExportGcsDestination: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a>

---

##### `dtmfSettings`<sup>Required</sup> <a name="dtmfSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings"></a>

```typescript
public readonly dtmfSettings: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a>

---

##### `loggingSettings`<sup>Required</sup> <a name="loggingSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.loggingSettings"></a>

```typescript
public readonly loggingSettings: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference</a>

---

##### `speechSettings`<sup>Required</sup> <a name="speechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.speechSettings"></a>

```typescript
public readonly speechSettings: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference</a>

---

##### `audioExportGcsDestinationInput`<sup>Optional</sup> <a name="audioExportGcsDestinationInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput"></a>

```typescript
public readonly audioExportGcsDestinationInput: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---

##### `dtmfSettingsInput`<sup>Optional</sup> <a name="dtmfSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput"></a>

```typescript
public readonly dtmfSettingsInput: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---

##### `loggingSettingsInput`<sup>Optional</sup> <a name="loggingSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.loggingSettingsInput"></a>

```typescript
public readonly loggingSettingsInput: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a>

---

##### `speechSettingsInput`<sup>Optional</sup> <a name="speechSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.speechSettingsInput"></a>

```typescript
public readonly speechSettingsInput: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a>

---


### GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetEndpointerSensitivity">resetEndpointerSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetModels">resetModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetNoSpeechTimeout">resetNoSpeechTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetUseTimeoutBasedEndpointing">resetUseTimeoutBasedEndpointing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointerSensitivity` <a name="resetEndpointerSensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetEndpointerSensitivity"></a>

```typescript
public resetEndpointerSensitivity(): void
```

##### `resetModels` <a name="resetModels" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetModels"></a>

```typescript
public resetModels(): void
```

##### `resetNoSpeechTimeout` <a name="resetNoSpeechTimeout" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetNoSpeechTimeout"></a>

```typescript
public resetNoSpeechTimeout(): void
```

##### `resetUseTimeoutBasedEndpointing` <a name="resetUseTimeoutBasedEndpointing" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetUseTimeoutBasedEndpointing"></a>

```typescript
public resetUseTimeoutBasedEndpointing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivityInput">endpointerSensitivityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.modelsInput">modelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeoutInput">noSpeechTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointingInput">useTimeoutBasedEndpointingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivity">endpointerSensitivity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.models">models</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeout">noSpeechTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointing">useTimeoutBasedEndpointing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointerSensitivityInput`<sup>Optional</sup> <a name="endpointerSensitivityInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivityInput"></a>

```typescript
public readonly endpointerSensitivityInput: number;
```

- *Type:* number

---

##### `modelsInput`<sup>Optional</sup> <a name="modelsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.modelsInput"></a>

```typescript
public readonly modelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `noSpeechTimeoutInput`<sup>Optional</sup> <a name="noSpeechTimeoutInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeoutInput"></a>

```typescript
public readonly noSpeechTimeoutInput: string;
```

- *Type:* string

---

##### `useTimeoutBasedEndpointingInput`<sup>Optional</sup> <a name="useTimeoutBasedEndpointingInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointingInput"></a>

```typescript
public readonly useTimeoutBasedEndpointingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointerSensitivity`<sup>Required</sup> <a name="endpointerSensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivity"></a>

```typescript
public readonly endpointerSensitivity: number;
```

- *Type:* number

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.models"></a>

```typescript
public readonly models: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `noSpeechTimeout`<sup>Required</sup> <a name="noSpeechTimeout" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeout"></a>

```typescript
public readonly noSpeechTimeout: string;
```

- *Type:* string

---

##### `useTimeoutBasedEndpointing`<sup>Required</sup> <a name="useTimeoutBasedEndpointing" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointing"></a>

```typescript
public readonly useTimeoutBasedEndpointing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a>

---


### GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference <a name="GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri">resetRepositoryUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch">resetTrackingBranch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetBranches` <a name="resetBranches" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches"></a>

```typescript
public resetBranches(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetRepositoryUri` <a name="resetRepositoryUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri"></a>

```typescript
public resetRepositoryUri(): void
```

##### `resetTrackingBranch` <a name="resetTrackingBranch" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch"></a>

```typescript
public resetTrackingBranch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput">branchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput">repositoryUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput">trackingBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches">branches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri">repositoryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch">trackingBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput"></a>

```typescript
public readonly branchesInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `repositoryUriInput`<sup>Optional</sup> <a name="repositoryUriInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput"></a>

```typescript
public readonly repositoryUriInput: string;
```

- *Type:* string

---

##### `trackingBranchInput`<sup>Optional</sup> <a name="trackingBranchInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput"></a>

```typescript
public readonly trackingBranchInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `repositoryUri`<sup>Required</sup> <a name="repositoryUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri"></a>

```typescript
public readonly repositoryUri: string;
```

- *Type:* string

---

##### `trackingBranch`<sup>Required</sup> <a name="trackingBranch" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch"></a>

```typescript
public readonly trackingBranch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---


### GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference <a name="GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings">putGithubSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings">resetGithubSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGithubSettings` <a name="putGithubSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings"></a>

```typescript
public putGithubSettings(value: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---

##### `resetGithubSettings` <a name="resetGithubSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings"></a>

```typescript
public resetGithubSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings">githubSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput">githubSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `githubSettings`<sup>Required</sup> <a name="githubSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings"></a>

```typescript
public readonly githubSettings: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a>

---

##### `githubSettingsInput`<sup>Optional</sup> <a name="githubSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput"></a>

```typescript
public readonly githubSettingsInput: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentGitIntegrationSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a>

---


### GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference <a name="GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation">resetEnableSpeechAdaptation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableSpeechAdaptation` <a name="resetEnableSpeechAdaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation"></a>

```typescript
public resetEnableSpeechAdaptation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput">enableSpeechAdaptationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation">enableSpeechAdaptation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableSpeechAdaptationInput`<sup>Optional</sup> <a name="enableSpeechAdaptationInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput"></a>

```typescript
public readonly enableSpeechAdaptationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSpeechAdaptation`<sup>Required</sup> <a name="enableSpeechAdaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation"></a>

```typescript
public readonly enableSpeechAdaptation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentSpeechToTextSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

---


### GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference <a name="GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">resetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynthesizeSpeechConfigs` <a name="resetSynthesizeSpeechConfigs" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```typescript
public resetSynthesizeSpeechConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">synthesizeSpeechConfigsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `synthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="synthesizeSpeechConfigsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```typescript
public readonly synthesizeSpeechConfigsInput: string;
```

- *Type:* string

---

##### `synthesizeSpeechConfigs`<sup>Required</sup> <a name="synthesizeSpeechConfigs" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```typescript
public readonly synthesizeSpeechConfigs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxAgentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a>

---


### GoogleDialogflowCxAgentTimeoutsOutputReference <a name="GoogleDialogflowCxAgentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxAgent } from '@cdktf/provider-google-beta'

new googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>

---



