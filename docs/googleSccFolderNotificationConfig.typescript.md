# `googleSccFolderNotificationConfig` Submodule <a name="`googleSccFolderNotificationConfig` Submodule" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccFolderNotificationConfig <a name="GoogleSccFolderNotificationConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config google_scc_folder_notification_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

new googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig(scope: Construct, id: string, config: GoogleSccFolderNotificationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig">GoogleSccFolderNotificationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig">GoogleSccFolderNotificationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putStreamingConfig">putStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamingConfig` <a name="putStreamingConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putStreamingConfig"></a>

```typescript
public putStreamingConfig(value: GoogleSccFolderNotificationConfigStreamingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putStreamingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSccFolderNotificationConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccFolderNotificationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isConstruct"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformElement"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformResource"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSccFolderNotificationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccFolderNotificationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccFolderNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccFolderNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference">GoogleSccFolderNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference">GoogleSccFolderNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.streamingConfigInput">streamingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.streamingConfig"></a>

```typescript
public readonly streamingConfig: GoogleSccFolderNotificationConfigStreamingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference">GoogleSccFolderNotificationConfigStreamingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccFolderNotificationConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference">GoogleSccFolderNotificationConfigTimeoutsOutputReference</a>

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `streamingConfigInput`<sup>Optional</sup> <a name="streamingConfigInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.streamingConfigInput"></a>

```typescript
public readonly streamingConfigInput: GoogleSccFolderNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSccFolderNotificationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccFolderNotificationConfigConfig <a name="GoogleSccFolderNotificationConfigConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.Initializer"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

const googleSccFolderNotificationConfigConfig: googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.configId">configId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.folder">folder</a></code> | <code>string</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.description">description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#id GoogleSccFolderNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#config_id GoogleSccFolderNotificationConfig#config_id}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#folder GoogleSccFolderNotificationConfig#folder}

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#pubsub_topic GoogleSccFolderNotificationConfig#pubsub_topic}

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.streamingConfig"></a>

```typescript
public readonly streamingConfig: GoogleSccFolderNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#streaming_config GoogleSccFolderNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#description GoogleSccFolderNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#id GoogleSccFolderNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccFolderNotificationConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#timeouts GoogleSccFolderNotificationConfig#timeouts}

---

### GoogleSccFolderNotificationConfigStreamingConfig <a name="GoogleSccFolderNotificationConfigStreamingConfig" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig.Initializer"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

const googleSccFolderNotificationConfigStreamingConfig: googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig.property.filter">filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#filter GoogleSccFolderNotificationConfig#filter}

---

### GoogleSccFolderNotificationConfigTimeouts <a name="GoogleSccFolderNotificationConfigTimeouts" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.Initializer"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

const googleSccFolderNotificationConfigTimeouts: googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#create GoogleSccFolderNotificationConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#delete GoogleSccFolderNotificationConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#update GoogleSccFolderNotificationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#create GoogleSccFolderNotificationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#delete GoogleSccFolderNotificationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_folder_notification_config#update GoogleSccFolderNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccFolderNotificationConfigStreamingConfigOutputReference <a name="GoogleSccFolderNotificationConfigStreamingConfigOutputReference" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

new googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSccFolderNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigStreamingConfig">GoogleSccFolderNotificationConfigStreamingConfig</a>

---


### GoogleSccFolderNotificationConfigTimeoutsOutputReference <a name="GoogleSccFolderNotificationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSccFolderNotificationConfig } from '@cdktf/provider-google-beta'

new googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSccFolderNotificationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSccFolderNotificationConfig.GoogleSccFolderNotificationConfigTimeouts">GoogleSccFolderNotificationConfigTimeouts</a>

---



