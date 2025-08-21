# `googleDialogflowCxPlaybook` Submodule <a name="`googleDialogflowCxPlaybook` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxPlaybook <a name="GoogleDialogflowCxPlaybook" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook google_dialogflow_cx_playbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

new googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook(scope: Construct, id: string, config: GoogleDialogflowCxPlaybookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig">GoogleDialogflowCxPlaybookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig">GoogleDialogflowCxPlaybookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction">putInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType">resetPlaybookType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools">resetReferencedTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstruction` <a name="putInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction"></a>

```typescript
public putInstruction(value: GoogleDialogflowCxPlaybookInstruction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings"></a>

```typescript
public putLlmModelSettings(value: GoogleDialogflowCxPlaybookLlmModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowCxPlaybookTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings"></a>

```typescript
public resetLlmModelSettings(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetPlaybookType` <a name="resetPlaybookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType"></a>

```typescript
public resetPlaybookType(): void
```

##### `resetReferencedTools` <a name="resetReferencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools"></a>

```typescript
public resetReferencedTools(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxPlaybook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxPlaybook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxPlaybook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows">referencedFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks">referencedPlaybooks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount">tokenCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput">goalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput">instructionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput">playbookTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput">referencedToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal">goal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType">playbookType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools">referencedTools</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction"></a>

```typescript
public readonly instruction: GoogleDialogflowCxPlaybookInstructionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a>

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `referencedFlows`<sup>Required</sup> <a name="referencedFlows" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows"></a>

```typescript
public readonly referencedFlows: string[];
```

- *Type:* string[]

---

##### `referencedPlaybooks`<sup>Required</sup> <a name="referencedPlaybooks" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks"></a>

```typescript
public readonly referencedPlaybooks: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxPlaybookTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a>

---

##### `tokenCount`<sup>Required</sup> <a name="tokenCount" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount"></a>

```typescript
public readonly tokenCount: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `goalInput`<sup>Optional</sup> <a name="goalInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput"></a>

```typescript
public readonly goalInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput"></a>

```typescript
public readonly instructionInput: GoogleDialogflowCxPlaybookInstruction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput"></a>

```typescript
public readonly llmModelSettingsInput: GoogleDialogflowCxPlaybookLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `playbookTypeInput`<sup>Optional</sup> <a name="playbookTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput"></a>

```typescript
public readonly playbookTypeInput: string;
```

- *Type:* string

---

##### `referencedToolsInput`<sup>Optional</sup> <a name="referencedToolsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput"></a>

```typescript
public readonly referencedToolsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowCxPlaybookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal"></a>

```typescript
public readonly goal: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `playbookType`<sup>Required</sup> <a name="playbookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType"></a>

```typescript
public readonly playbookType: string;
```

- *Type:* string

---

##### `referencedTools`<sup>Required</sup> <a name="referencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools"></a>

```typescript
public readonly referencedTools: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxPlaybookConfig <a name="GoogleDialogflowCxPlaybookConfig" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

const googleDialogflowCxPlaybookConfig: googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal">goal</a></code> | <code>string</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType">playbookType</a></code> | <code>string</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools">referencedTools</a></code> | <code>string[]</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#display_name GoogleDialogflowCxPlaybook#display_name}

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal"></a>

```typescript
public readonly goal: string;
```

- *Type:* string

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#goal GoogleDialogflowCxPlaybook#goal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction"></a>

```typescript
public readonly instruction: GoogleDialogflowCxPlaybookInstruction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#instruction GoogleDialogflowCxPlaybook#instruction}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: GoogleDialogflowCxPlaybookLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#llm_model_settings GoogleDialogflowCxPlaybook#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#parent GoogleDialogflowCxPlaybook#parent}

---

##### `playbookType`<sup>Optional</sup> <a name="playbookType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType"></a>

```typescript
public readonly playbookType: string;
```

- *Type:* string

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#playbook_type GoogleDialogflowCxPlaybook#playbook_type}

---

##### `referencedTools`<sup>Optional</sup> <a name="referencedTools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools"></a>

```typescript
public readonly referencedTools: string[];
```

- *Type:* string[]

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#referenced_tools GoogleDialogflowCxPlaybook#referenced_tools}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxPlaybookTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#timeouts GoogleDialogflowCxPlaybook#timeouts}

---

### GoogleDialogflowCxPlaybookInstruction <a name="GoogleDialogflowCxPlaybookInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

const googleDialogflowCxPlaybookInstruction: googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines">guidelines</a></code> | <code>string</code> | General guidelines for the playbook. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>[]</code> | steps block. |

---

##### `guidelines`<sup>Optional</sup> <a name="guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines"></a>

```typescript
public readonly guidelines: string;
```

- *Type:* string

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#guidelines GoogleDialogflowCxPlaybook#guidelines}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps"></a>

```typescript
public readonly steps: IResolvable | GoogleDialogflowCxPlaybookInstructionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

### GoogleDialogflowCxPlaybookInstructionSteps <a name="GoogleDialogflowCxPlaybookInstructionSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

const googleDialogflowCxPlaybookInstructionSteps: googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps">steps</a></code> | <code>string</code> | Sub-processing needed to execute the current step. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text">text</a></code> | <code>string</code> | Step instruction in text format. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps"></a>

```typescript
public readonly steps: string;
```

- *Type:* string

Sub-processing needed to execute the current step.

This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Step instruction in text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#text GoogleDialogflowCxPlaybook#text}

---

### GoogleDialogflowCxPlaybookLlmModelSettings <a name="GoogleDialogflowCxPlaybookLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

const googleDialogflowCxPlaybookLlmModelSettings: googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model">model</a></code> | <code>string</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText">promptText</a></code> | <code>string</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#model GoogleDialogflowCxPlaybook#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#prompt_text GoogleDialogflowCxPlaybook#prompt_text}

---

### GoogleDialogflowCxPlaybookTimeouts <a name="GoogleDialogflowCxPlaybookTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

const googleDialogflowCxPlaybookTimeouts: googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxPlaybookInstructionOutputReference <a name="GoogleDialogflowCxPlaybookInstructionOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

new googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines">resetGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps">resetSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | GoogleDialogflowCxPlaybookInstructionSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>[]

---

##### `resetGuidelines` <a name="resetGuidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines"></a>

```typescript
public resetGuidelines(): void
```

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps"></a>

```typescript
public resetSteps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput">guidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines">guidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps"></a>

```typescript
public readonly steps: GoogleDialogflowCxPlaybookInstructionStepsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a>

---

##### `guidelinesInput`<sup>Optional</sup> <a name="guidelinesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput"></a>

```typescript
public readonly guidelinesInput: string;
```

- *Type:* string

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | GoogleDialogflowCxPlaybookInstructionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>[]

---

##### `guidelines`<sup>Required</sup> <a name="guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines"></a>

```typescript
public readonly guidelines: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxPlaybookInstruction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---


### GoogleDialogflowCxPlaybookInstructionStepsList <a name="GoogleDialogflowCxPlaybookInstructionStepsList" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

new googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCxPlaybookInstructionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxPlaybookInstructionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>[]

---


### GoogleDialogflowCxPlaybookInstructionStepsOutputReference <a name="GoogleDialogflowCxPlaybookInstructionStepsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

new googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps">resetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps"></a>

```typescript
public resetSteps(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput">stepsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps">steps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps"></a>

```typescript
public readonly steps: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxPlaybookInstructionSteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>

---


### GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference <a name="GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

new googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText"></a>

```typescript
public resetPromptText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput"></a>

```typescript
public readonly promptTextInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxPlaybookLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---


### GoogleDialogflowCxPlaybookTimeoutsOutputReference <a name="GoogleDialogflowCxPlaybookTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxPlaybook } from '@cdktf/provider-google-beta'

new googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxPlaybookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

---



