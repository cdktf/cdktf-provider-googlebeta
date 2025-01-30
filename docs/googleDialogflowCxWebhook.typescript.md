# `googleDialogflowCxWebhook` Submodule <a name="`googleDialogflowCxWebhook` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxWebhook <a name="GoogleDialogflowCxWebhook" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook google_dialogflow_cx_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

new googleDialogflowCxWebhook.GoogleDialogflowCxWebhook(scope: Construct, id: string, config: GoogleDialogflowCxWebhookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig">GoogleDialogflowCxWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig">GoogleDialogflowCxWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putGenericWebService">putGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putServiceDirectory">putServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetEnableSpellCorrection">resetEnableSpellCorrection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetEnableStackdriverLogging">resetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetGenericWebService">resetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetServiceDirectory">resetServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGenericWebService` <a name="putGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putGenericWebService"></a>

```typescript
public putGenericWebService(value: GoogleDialogflowCxWebhookGenericWebService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a>

---

##### `putServiceDirectory` <a name="putServiceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putServiceDirectory"></a>

```typescript
public putServiceDirectory(value: GoogleDialogflowCxWebhookServiceDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putServiceDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowCxWebhookTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEnableSpellCorrection` <a name="resetEnableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetEnableSpellCorrection"></a>

```typescript
public resetEnableSpellCorrection(): void
```

##### `resetEnableStackdriverLogging` <a name="resetEnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetEnableStackdriverLogging"></a>

```typescript
public resetEnableStackdriverLogging(): void
```

##### `resetGenericWebService` <a name="resetGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetGenericWebService"></a>

```typescript
public resetGenericWebService(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetSecuritySettings"></a>

```typescript
public resetSecuritySettings(): void
```

##### `resetServiceDirectory` <a name="resetServiceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetServiceDirectory"></a>

```typescript
public resetServiceDirectory(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isConstruct"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformElement"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformResource"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDialogflowCxWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference">GoogleDialogflowCxWebhookGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.serviceDirectory">serviceDirectory</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference">GoogleDialogflowCxWebhookServiceDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.startFlow">startFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference">GoogleDialogflowCxWebhookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableSpellCorrectionInput">enableSpellCorrectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableStackdriverLoggingInput">enableStackdriverLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.genericWebServiceInput">genericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.securitySettingsInput">securitySettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.serviceDirectoryInput">serviceDirectoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableSpellCorrection">enableSpellCorrection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.securitySettings">securitySettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `genericWebService`<sup>Required</sup> <a name="genericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.genericWebService"></a>

```typescript
public readonly genericWebService: GoogleDialogflowCxWebhookGenericWebServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference">GoogleDialogflowCxWebhookGenericWebServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceDirectory`<sup>Required</sup> <a name="serviceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.serviceDirectory"></a>

```typescript
public readonly serviceDirectory: GoogleDialogflowCxWebhookServiceDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference">GoogleDialogflowCxWebhookServiceDirectoryOutputReference</a>

---

##### `startFlow`<sup>Required</sup> <a name="startFlow" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.startFlow"></a>

```typescript
public readonly startFlow: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxWebhookTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference">GoogleDialogflowCxWebhookTimeoutsOutputReference</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableSpellCorrectionInput`<sup>Optional</sup> <a name="enableSpellCorrectionInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableSpellCorrectionInput"></a>

```typescript
public readonly enableSpellCorrectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLoggingInput`<sup>Optional</sup> <a name="enableStackdriverLoggingInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableStackdriverLoggingInput"></a>

```typescript
public readonly enableStackdriverLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `genericWebServiceInput`<sup>Optional</sup> <a name="genericWebServiceInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.genericWebServiceInput"></a>

```typescript
public readonly genericWebServiceInput: GoogleDialogflowCxWebhookGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.securitySettingsInput"></a>

```typescript
public readonly securitySettingsInput: string;
```

- *Type:* string

---

##### `serviceDirectoryInput`<sup>Optional</sup> <a name="serviceDirectoryInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.serviceDirectoryInput"></a>

```typescript
public readonly serviceDirectoryInput: GoogleDialogflowCxWebhookServiceDirectory;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowCxWebhookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableSpellCorrection`<sup>Required</sup> <a name="enableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableSpellCorrection"></a>

```typescript
public readonly enableSpellCorrection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLogging`<sup>Required</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.securitySettings"></a>

```typescript
public readonly securitySettings: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxWebhookConfig <a name="GoogleDialogflowCxWebhookConfig" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

const googleDialogflowCxWebhookConfig: googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the webhook, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the webhook is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.enableSpellCorrection">enableSpellCorrection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#id GoogleDialogflowCxWebhook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.securitySettings">securitySettings</a></code> | <code>string</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.serviceDirectory">serviceDirectory</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a></code> | service_directory block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.timeout">timeout</a></code> | <code>string</code> | Webhook execution timeout. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the webhook, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#display_name GoogleDialogflowCxWebhook#display_name}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the webhook is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#disabled GoogleDialogflowCxWebhook#disabled}

---

##### `enableSpellCorrection`<sup>Optional</sup> <a name="enableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.enableSpellCorrection"></a>

```typescript
public readonly enableSpellCorrection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#enable_spell_correction GoogleDialogflowCxWebhook#enable_spell_correction}

---

##### `enableStackdriverLogging`<sup>Optional</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#enable_stackdriver_logging GoogleDialogflowCxWebhook#enable_stackdriver_logging}

---

##### `genericWebService`<sup>Optional</sup> <a name="genericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.genericWebService"></a>

```typescript
public readonly genericWebService: GoogleDialogflowCxWebhookGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#generic_web_service GoogleDialogflowCxWebhook#generic_web_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#id GoogleDialogflowCxWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#parent GoogleDialogflowCxWebhook#parent}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.securitySettings"></a>

```typescript
public readonly securitySettings: string;
```

- *Type:* string

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#security_settings GoogleDialogflowCxWebhook#security_settings}

---

##### `serviceDirectory`<sup>Optional</sup> <a name="serviceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.serviceDirectory"></a>

```typescript
public readonly serviceDirectory: GoogleDialogflowCxWebhookServiceDirectory;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a>

service_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#service_directory GoogleDialogflowCxWebhook#service_directory}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Webhook execution timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#timeout GoogleDialogflowCxWebhook#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxWebhookTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#timeouts GoogleDialogflowCxWebhook#timeouts}

---

### GoogleDialogflowCxWebhookGenericWebService <a name="GoogleDialogflowCxWebhookGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

const googleDialogflowCxWebhookGenericWebService: googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.uri">uri</a></code> | <code>string</code> | Whether to use speech adaptation for speech recognition. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.allowedCaCerts">allowedCaCerts</a></code> | <code>string[]</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | The HTTP request headers to send together with webhook requests. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#uri GoogleDialogflowCxWebhook#uri}

---

##### `allowedCaCerts`<sup>Optional</sup> <a name="allowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.allowedCaCerts"></a>

```typescript
public readonly allowedCaCerts: string[];
```

- *Type:* string[]

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#allowed_ca_certs GoogleDialogflowCxWebhook#allowed_ca_certs}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#request_headers GoogleDialogflowCxWebhook#request_headers}

---

### GoogleDialogflowCxWebhookServiceDirectory <a name="GoogleDialogflowCxWebhookServiceDirectory" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

const googleDialogflowCxWebhookServiceDirectory: googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.property.service">service</a></code> | <code>string</code> | The name of Service Directory service. |

---

##### `genericWebService`<sup>Required</sup> <a name="genericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.property.genericWebService"></a>

```typescript
public readonly genericWebService: GoogleDialogflowCxWebhookServiceDirectoryGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#generic_web_service GoogleDialogflowCxWebhook#generic_web_service}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of Service Directory service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#service GoogleDialogflowCxWebhook#service}

---

### GoogleDialogflowCxWebhookServiceDirectoryGenericWebService <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

const googleDialogflowCxWebhookServiceDirectoryGenericWebService: googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.uri">uri</a></code> | <code>string</code> | Whether to use speech adaptation for speech recognition. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts">allowedCaCerts</a></code> | <code>string[]</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | The HTTP request headers to send together with webhook requests. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#uri GoogleDialogflowCxWebhook#uri}

---

##### `allowedCaCerts`<sup>Optional</sup> <a name="allowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts"></a>

```typescript
public readonly allowedCaCerts: string[];
```

- *Type:* string[]

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#allowed_ca_certs GoogleDialogflowCxWebhook#allowed_ca_certs}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#request_headers GoogleDialogflowCxWebhook#request_headers}

---

### GoogleDialogflowCxWebhookTimeouts <a name="GoogleDialogflowCxWebhookTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

const googleDialogflowCxWebhookTimeouts: googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#create GoogleDialogflowCxWebhook#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#delete GoogleDialogflowCxWebhook#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#update GoogleDialogflowCxWebhook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#create GoogleDialogflowCxWebhook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#delete GoogleDialogflowCxWebhook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dialogflow_cx_webhook#update GoogleDialogflowCxWebhook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxWebhookGenericWebServiceOutputReference <a name="GoogleDialogflowCxWebhookGenericWebServiceOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

new googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts">resetAllowedCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCaCerts` <a name="resetAllowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```typescript
public resetAllowedCaCerts(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput">allowedCaCertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts">allowedCaCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedCaCertsInput`<sup>Optional</sup> <a name="allowedCaCertsInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```typescript
public readonly allowedCaCertsInput: string[];
```

- *Type:* string[]

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `allowedCaCerts`<sup>Required</sup> <a name="allowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```typescript
public readonly allowedCaCerts: string[];
```

- *Type:* string[]

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxWebhookGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookGenericWebService">GoogleDialogflowCxWebhookGenericWebService</a>

---


### GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference <a name="GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

new googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts">resetAllowedCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCaCerts` <a name="resetAllowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```typescript
public resetAllowedCaCerts(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput">allowedCaCertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts">allowedCaCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedCaCertsInput`<sup>Optional</sup> <a name="allowedCaCertsInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```typescript
public readonly allowedCaCertsInput: string[];
```

- *Type:* string[]

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `allowedCaCerts`<sup>Required</sup> <a name="allowedCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```typescript
public readonly allowedCaCerts: string[];
```

- *Type:* string[]

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxWebhookServiceDirectoryGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a>

---


### GoogleDialogflowCxWebhookServiceDirectoryOutputReference <a name="GoogleDialogflowCxWebhookServiceDirectoryOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

new googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService">putGenericWebService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenericWebService` <a name="putGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService"></a>

```typescript
public putGenericWebService(value: GoogleDialogflowCxWebhookServiceDirectoryGenericWebService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput">genericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `genericWebService`<sup>Required</sup> <a name="genericWebService" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService"></a>

```typescript
public readonly genericWebService: GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a>

---

##### `genericWebServiceInput`<sup>Optional</sup> <a name="genericWebServiceInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput"></a>

```typescript
public readonly genericWebServiceInput: GoogleDialogflowCxWebhookServiceDirectoryGenericWebService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryGenericWebService">GoogleDialogflowCxWebhookServiceDirectoryGenericWebService</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxWebhookServiceDirectory;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookServiceDirectory">GoogleDialogflowCxWebhookServiceDirectory</a>

---


### GoogleDialogflowCxWebhookTimeoutsOutputReference <a name="GoogleDialogflowCxWebhookTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxWebhook } from '@cdktf/provider-google-beta'

new googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxWebhookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxWebhook.GoogleDialogflowCxWebhookTimeouts">GoogleDialogflowCxWebhookTimeouts</a>

---



