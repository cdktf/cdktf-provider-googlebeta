# `googleProjectAccessApprovalSettings` Submodule <a name="`googleProjectAccessApprovalSettings` Submodule" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectAccessApprovalSettings <a name="GoogleProjectAccessApprovalSettings" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings google_project_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

new googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings(scope: Construct, id: string, config: GoogleProjectAccessApprovalSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig">GoogleProjectAccessApprovalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig">GoogleProjectAccessApprovalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices">putEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetActiveKeyVersion">resetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetNotificationEmails">resetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnrolledServices` <a name="putEnrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices"></a>

```typescript
public putEnrolledServices(value: IResolvable | GoogleProjectAccessApprovalSettingsEnrolledServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleProjectAccessApprovalSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

---

##### `resetActiveKeyVersion` <a name="resetActiveKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetActiveKeyVersion"></a>

```typescript
public resetActiveKeyVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationEmails` <a name="resetNotificationEmails" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetNotificationEmails"></a>

```typescript
public resetNotificationEmails(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProjectAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleProjectAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleProjectAccessApprovalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleProjectAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion">ancestorHasActiveKeyVersion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledAncestor">enrolledAncestor</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServices">enrolledServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList">GoogleProjectAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.invalidKeyVersion">invalidKeyVersion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference">GoogleProjectAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersionInput">activeKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServicesInput">enrolledServicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmailsInput">notificationEmailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersion">activeKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmails">notificationEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ancestorHasActiveKeyVersion`<sup>Required</sup> <a name="ancestorHasActiveKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```typescript
public readonly ancestorHasActiveKeyVersion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enrolledAncestor`<sup>Required</sup> <a name="enrolledAncestor" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledAncestor"></a>

```typescript
public readonly enrolledAncestor: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServices"></a>

```typescript
public readonly enrolledServices: GoogleProjectAccessApprovalSettingsEnrolledServicesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList">GoogleProjectAccessApprovalSettingsEnrolledServicesList</a>

---

##### `invalidKeyVersion`<sup>Required</sup> <a name="invalidKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.invalidKeyVersion"></a>

```typescript
public readonly invalidKeyVersion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleProjectAccessApprovalSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference">GoogleProjectAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `activeKeyVersionInput`<sup>Optional</sup> <a name="activeKeyVersionInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersionInput"></a>

```typescript
public readonly activeKeyVersionInput: string;
```

- *Type:* string

---

##### `enrolledServicesInput`<sup>Optional</sup> <a name="enrolledServicesInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServicesInput"></a>

```typescript
public readonly enrolledServicesInput: IResolvable | GoogleProjectAccessApprovalSettingsEnrolledServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `notificationEmailsInput`<sup>Optional</sup> <a name="notificationEmailsInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmailsInput"></a>

```typescript
public readonly notificationEmailsInput: string[];
```

- *Type:* string[]

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleProjectAccessApprovalSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersion"></a>

```typescript
public readonly activeKeyVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationEmails`<sup>Required</sup> <a name="notificationEmails" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmails"></a>

```typescript
public readonly notificationEmails: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectAccessApprovalSettingsConfig <a name="GoogleProjectAccessApprovalSettingsConfig" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.Initializer"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

const googleProjectAccessApprovalSettingsConfig: googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.enrolledServices">enrolledServices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>[]</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.projectId">projectId</a></code> | <code>string</code> | ID of the project of the access approval settings. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.activeKeyVersion">activeKeyVersion</a></code> | <code>string</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#id GoogleProjectAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.notificationEmails">notificationEmails</a></code> | <code>string[]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.project">project</a></code> | <code>string</code> | Project id. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.enrolledServices"></a>

```typescript
public readonly enrolledServices: IResolvable | GoogleProjectAccessApprovalSettingsEnrolledServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>[]

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#enrolled_services GoogleProjectAccessApprovalSettings#enrolled_services}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

ID of the project of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#project_id GoogleProjectAccessApprovalSettings#project_id}

---

##### `activeKeyVersion`<sup>Optional</sup> <a name="activeKeyVersion" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```typescript
public readonly activeKeyVersion: string;
```

- *Type:* string

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#active_key_version GoogleProjectAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#id GoogleProjectAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationEmails`<sup>Optional</sup> <a name="notificationEmails" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.notificationEmails"></a>

```typescript
public readonly notificationEmails: string[];
```

- *Type:* string[]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#notification_emails GoogleProjectAccessApprovalSettings#notification_emails}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#project GoogleProjectAccessApprovalSettings#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleProjectAccessApprovalSettingsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#timeouts GoogleProjectAccessApprovalSettings#timeouts}

---

### GoogleProjectAccessApprovalSettingsEnrolledServices <a name="GoogleProjectAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.Initializer"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

const googleProjectAccessApprovalSettingsEnrolledServices: googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct">cloudProduct</a></code> | <code>string</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">enrollmentLevel</a></code> | <code>string</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```typescript
public readonly cloudProduct: string;
```

- *Type:* string

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
  all
  appengine.googleapis.com
  bigquery.googleapis.com
  bigtable.googleapis.com
  cloudkms.googleapis.com
  compute.googleapis.com
  dataflow.googleapis.com
  iam.googleapis.com
  pubsub.googleapis.com
  storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#cloud_product GoogleProjectAccessApprovalSettings#cloud_product}

---

##### `enrollmentLevel`<sup>Optional</sup> <a name="enrollmentLevel" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```typescript
public readonly enrollmentLevel: string;
```

- *Type:* string

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#enrollment_level GoogleProjectAccessApprovalSettings#enrollment_level}

---

### GoogleProjectAccessApprovalSettingsTimeouts <a name="GoogleProjectAccessApprovalSettingsTimeouts" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.Initializer"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

const googleProjectAccessApprovalSettingsTimeouts: googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#create GoogleProjectAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#delete GoogleProjectAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#update GoogleProjectAccessApprovalSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#create GoogleProjectAccessApprovalSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#delete GoogleProjectAccessApprovalSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_project_access_approval_settings#update GoogleProjectAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectAccessApprovalSettingsEnrolledServicesList <a name="GoogleProjectAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

new googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get"></a>

```typescript
public get(index: number): GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleProjectAccessApprovalSettingsEnrolledServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>[]

---


### GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference <a name="GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

new googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">resetEnrollmentLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnrollmentLevel` <a name="resetEnrollmentLevel" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```typescript
public resetEnrollmentLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">cloudProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">enrollmentLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">cloudProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">enrollmentLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProductInput`<sup>Optional</sup> <a name="cloudProductInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```typescript
public readonly cloudProductInput: string;
```

- *Type:* string

---

##### `enrollmentLevelInput`<sup>Optional</sup> <a name="enrollmentLevelInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```typescript
public readonly enrollmentLevelInput: string;
```

- *Type:* string

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```typescript
public readonly cloudProduct: string;
```

- *Type:* string

---

##### `enrollmentLevel`<sup>Required</sup> <a name="enrollmentLevel" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```typescript
public readonly enrollmentLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleProjectAccessApprovalSettingsEnrolledServices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices">GoogleProjectAccessApprovalSettingsEnrolledServices</a>

---


### GoogleProjectAccessApprovalSettingsTimeoutsOutputReference <a name="GoogleProjectAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleProjectAccessApprovalSettings } from '@cdktf/provider-google-beta'

new googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleProjectAccessApprovalSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

---



